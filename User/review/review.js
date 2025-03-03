document.addEventListener("DOMContentLoaded", function () {
    loadClinicName();  // โหลดชื่อคลินิก
    loadReviews();     // โหลดรีวิว
});

// ฟังก์ชันดึงชื่อคลินิกจาก URL
function loadClinicName() {
    let urlParams = new URLSearchParams(window.location.search);
    let clinicName = urlParams.get("clinic") || "ไม่พบข้อมูลคลินิก";
    document.getElementById("clinicName").innerText = clinicName;
}

// ฟังก์ชันดึงข้อมูลรีวิว
async function loadReviews() {
    try {
        let response = await fetch("https://your-api.com/reviews"); // เปลี่ยนเป็น API จริง
        let reviews = await response.json();
        displayReviews(reviews);
    } catch (error) {
        console.error("Error loading reviews:", error);
        document.getElementById("reviewContainer").innerHTML = "<p>ไม่สามารถโหลดรีวิวได้</p>";
    }
}

// ฟังก์ชันแสดงรีวิวในหน้าเว็บ
function displayReviews(reviews) {
    let container = document.getElementById("reviewContainer");
    container.innerHTML = ""; // เคลียร์ข้อมูลเก่า

    reviews.forEach(review => {
        let reviewElement = document.createElement("div");
        reviewElement.classList.add("review-item");

        reviewElement.innerHTML = `
            <div class="review-header">
                <strong>${review.username}</strong>
                <span class="rating">${generateStars(review.rating)}</span>
            </div>
            <p>${review.comment}</p>
        `;

        container.appendChild(reviewElement);
    });
}

// ฟังก์ชันสร้างดาวรีวิว ⭐⭐⭐⭐
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? "⭐" : "☆";
    }
    return stars;
}
document.addEventListener("DOMContentLoaded", function () {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewContainer = document.getElementById("reviewContainer");

    if (reviews.length === 0) {
        reviewContainer.innerHTML = "<p>ไม่มีรีวิวที่จะแสดง</p>";
        return;
    }

    reviews.forEach(review => {
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review-card";
        reviewDiv.innerHTML = `
            <div class="clinic-name"><strong>คลินิก:</strong> ${review.clinic || "ไม่พบข้อมูลคลินิก"}</div>
            <div class="stars"><strong>ให้คะแนน:</strong> ${"⭐".repeat(review.stars)}</div>
            <div class="comment"><strong>รีวิว:</strong> ${review.review}</div>
            <div class="date"><strong>วันที่:</strong> ${review.date}</div>
        `;
        reviewContainer.appendChild(reviewDiv);
    });
});

