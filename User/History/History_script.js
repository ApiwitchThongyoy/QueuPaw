document.addEventListener("DOMContentLoaded", function () {
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
                <h2>ประวัติการจอง</h2>
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
                        ${history.status === "completed" ? getReviewSection(index) : ""}
                    </div>
                </div>
            `;
            historyContainer.appendChild(appointmentDiv);
        });

        // Event delegation for dynamically added elements (Review Submission)
        historyContainer.addEventListener("click", function (event) {
            if (event.target.closest(".confirm")) {
                const reviewContainer = event.target.closest(".review");
                const reviewInput = reviewContainer.querySelector("input").value.trim();
                if (reviewInput) {
                    submitReview(reviewInput);
                } else {
                    alert("กรุณากรอกรีวิวก่อนส่ง");
                }
            }
        });
    }
});

// Function to determine status class
function getStatusClass(status) {
    return {
        completed: "Pass",
        doctorCancel: "doctorCancel",
        userCancel: "userCancel",
    }[status] || "Wait";
}

// Function to determine status text
function getStatusText(status) {
    return {
        completed: "รักษาสำเร็จ",
        doctorCancel: "สัตวแพทย์ยกเลิก",
        userCancel: "ผู้ใช้ยกเลิก",
    }[status] || "กำลังรอคิวรักษา";
}

// Function to generate review section
function getReviewSection(index) {
    return `
        <div class="review" data-index="${index}">
            <div class="rate">
                <i class='bx bxs-star' style='color:#d8fd00'></i>
                <i class='bx bxs-star' style='color:#d8fd00'></i>
                <i class='bx bxs-star' style='color:#d8fd00'></i>
                <i class='bx bxs-star' style='color:#d8fd00'></i>
                <i class='bx bxs-star' style='color:#d8fd00'></i> 
            </div>  
            <div><input type="text" placeholder="เขียนรีวิวของคุณ"></div>
            <div class="confirm">              
                <i class='bx bxs-comment-detail'> ยืนยัน</i>
            </div> 
        </div>`;
}

// Function to handle review submission
function submitReview(reviewText) {
    // Save the review to localStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ review: reviewText, date: new Date().toLocaleString() });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("รีวิวถูกส่งเรียบร้อย");
    window.location.href = "../../review/review.html";
}
