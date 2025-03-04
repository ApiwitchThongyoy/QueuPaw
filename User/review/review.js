document.addEventListener("DOMContentLoaded", function () {
    loadReviews(); // โหลดรีวิวที่เคยบันทึกไว้ก่อนหน้านี้
    loadClinicName();
});
document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username") || "ผู้ใช้ทั่วไป"; // ถ้าไม่มีข้อมูล ให้เป็นค่าเริ่มต้น
    document.getElementById("username").textContent = username;
});

function loadClinicName() {
    let clinicName = localStorage.getItem("clinicName") || "ไม่พบข้อมูลคลินิก";
    document.getElementById("clinicName").innerText = clinicName;
}
document.addEventListener("DOMContentLoaded", loadClinicName);


function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewContainer = document.querySelector(".review-container");

    reviewContainer.innerHTML = ""; // ล้างค่าก่อนโหลดใหม่
    reviews.forEach(review => {
        displayReview(review);
    });
}

// ฟังก์ชันเพิ่มรีวิวใหม่
function submitReview() {
    const username = document.getElementById("usernameInput").value.trim() || "ผู้ใช้ทั่วไป";
    const reviewText = document.getElementById("reviewInput").value.trim();
    const starRating = document.getElementById("starRating").value;

    if (!reviewText) {
        alert("กรุณากรอกรีวิวก่อนส่ง");
        return;
    }

    const newReview = {
        username: username,
        review: reviewText,
        stars: parseInt(starRating, 10),
        date: new Date().toLocaleDateString("th-TH"),
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReview(newReview);
    document.getElementById("reviewInput").value = ""; // เคลียร์ช่องป้อนข้อมูล
}

// ฟังก์ชันแสดงผลรีวิวในหน้าเว็บ
function displayReview(review) {
    const reviewContainer = document.querySelector(".review-container");
    if (!reviewContainer) {
        console.error("Review container not found");
        return;
    }

    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review-container-grid";

    // Ensure review properties are available and valid
    const username = review.username || "ผู้ใช้ทั่วไป";
    const stars = Number.isInteger(review.stars) ? review.stars : 0;
    const reviewText = review.review || "No review content";
    const reviewDate = review.date || "Unknown date";

    reviewDiv.innerHTML = `
        <div class="review-item">
            <div class="title_review">${username}</div>
            <div class="review-star">${"⭐".repeat(stars)}</div>
            <div class="rate-score">${stars}</div>
        </div>
        <div class="detail-review">${reviewText}</div>
        <div class="review-day">${reviewDate}</div>
    `;

    reviewContainer.prepend(reviewDiv); // แสดงรีวิวใหม่ที่ด้านบน
}
