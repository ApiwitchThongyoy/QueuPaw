document.addEventListener("DOMContentLoaded", function () {
    loadUsername();
    // Retrieve history data (ensure it's an array)
    const historyInfo = JSON.parse(localStorage.getItem("history")) || [];

    // Get history container
    const historyContainer = document.getElementById("historyContainer");

    // Ensure historyInfo is an array and has records
    if (Array.isArray(historyInfo) && historyInfo.length > 0) {
        historyInfo.forEach((history, index) => {
            const appointmentDiv = document.createElement("div");
            appointmentDiv.className = "appointment";
            appointmentDiv.innerHTML = `
                <div class="history-card">
                    <div>
                        <img src="../History/img/Hospital.jpeg">
                        <div class="details-Title">
                            <strong>ชื่อคลินิก:</strong> <div class="details">${history.clinicName}</div>
                        </div>
                        <div class="details-Animal">
                            <strong>ประเภทสัตว์:</strong> <div class="details">${history.animalType}</div>
                        </div>
                        <div class="details-Symptom">
                            <strong>สาเหตุ/อาการ:</strong> <div class="details">${history.reason}</div>
                        </div>
                        <div class="details-Day">
                            <strong>วันที่:</strong> <div class="details">${history.date}</div>
                        </div>
                        <div class="details-Time">
                            <strong>เวลา:</strong> <div class="details">${history.time}</div>
                        </div>
                        <div class="details-Status">
                            <strong>สถานะ:</strong>
                            <div class="${getStatusClass(history.status)}">${getStatusText(history.status)}</div>
                        </div>
                        ${(history.status === "ยกเลิก" && history.cancelReason) ? `
                            <div class="details-CancelReason">
                                <strong>เหตุผลในการยกเลิกโดยสัตวแพทย์:</strong> <div class="details">${history.cancelReason}</div>
                            </div>
                        ` : ""}
                        ${(history.status === "userCancel" && history.userCancelReason) ? `
                            <div class="details-CancelReason">
                                <strong>เหตุผลในการยกเลิกโดยผู้ใช้:</strong> <div class="details">${history.userCancelReason}</div>
                            </div>
                        ` : ""}
                        ${history.status === "รักษาสำเร็จ" ? getReviewSection(index) : ""}
                    </div>
                </div>
            `;
            historyContainer.appendChild(appointmentDiv);
        });

        // Event delegation for dynamically added elements (Review Submission & Star Rating)
        historyContainer.addEventListener("click", function (event) {
            if (event.target.closest(".confirm")) {
                const reviewContainer = event.target.closest(".review");
                const reviewInput = reviewContainer.querySelector("input").value.trim();
                const selectedStars = reviewContainer.querySelectorAll(".bxs-star.selected").length;

                if (reviewInput && selectedStars > 0) {
                    submitReview(reviewInput, selectedStars);
                } else {
                    alert("กรุณากรอกรีวิวและเลือกดาวก่อนส่ง");
                }
            } else if (event.target.classList.contains("bxs-star")) {
                updateStarRating(event.target);
            }
        });
    }
});

// Function to determine status class
function getStatusClass(status) {
    return {
        "ยกเลิก": "doctorCancel",
        userCancel: "userCancel",
        "รักษาสำเร็จ": "Pass",
    }[status] || "Wait";
}

// Function to determine status text
function getStatusText(status) {
    return {
        "ยกเลิก": "สัตวแพทย์ยกเลิกคิว",
        userCancel: "คุณได้ยกเลิกคิว",
        "รักษาสำเร็จ": "รักษาสำเร็จ",
    }[status] || "กำลังรอคิวรักษา";
}

// Function to generate review section with interactive stars
function getReviewSection(index) {
    return `
        <div class="review" data-index="${index}">
            <div class="rate">
                <i class='bx bxs-star' data-value="1"></i>
                <i class='bx bxs-star' data-value="2"></i>
                <i class='bx bxs-star' data-value="3"></i>
                <i class='bx bxs-star' data-value="4"></i>
                <i class='bx bxs-star' data-value="5"></i> 
            </div>  
            <div><input type="text" placeholder="เขียนรีวิวของคุณ"></div>
            <div class="confirm">              
                <i class='bx bxs-comment-detail'> ยืนยัน</i>
            </div> 
        </div>`;
}

// Function to handle review submission
function submitReview(reviewText, starRating) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ review: reviewText, stars: starRating, date: new Date().toLocaleString() });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("รีวิวถูกส่งเรียบร้อย");
    window.location.href = "../review/index.html";
}

// Function to handle star rating selection
function updateStarRating(selectedStar) {
    const allStars = selectedStar.parentElement.querySelectorAll(".bxs-star");
    const selectedValue = parseInt(selectedStar.getAttribute("data-value"), 10);

    allStars.forEach(star => {
        const starValue = parseInt(star.getAttribute("data-value"), 10);
        if (starValue <= selectedValue) {
            star.classList.add("selected");
            star.style.color = "#d8fd00"; // สีเหลืองเมื่อถูกเลือก
        } else {
            star.classList.remove("selected");
            star.style.color = "#ccc"; // สีเทาถ้าไม่ถูกเลือก
        }
    });
}
function loadUsername() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').innerText = username; // ใช้ id="username"
    }
}