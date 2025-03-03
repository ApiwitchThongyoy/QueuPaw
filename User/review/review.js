document.addEventListener("DOMContentLoaded", function () {
    loadReviews(); // โหลดรีวิวที่เคยบันทึกไว้ก่อนหน้านี้
});

// ฟังก์ชันดึงข้อมูลรีวิวจาก localStorage และแสดงบนหน้าเว็บ
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
    const username = document.getElementById("usernameInput").value || "ผู้ใช้ทั่วไป";
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

    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review-container-grid";
    reviewDiv.innerHTML = `
        <div class="review-item">
            <div class="title_review">${review.username}</div>
            <div class="review-star">${"⭐".repeat(review.stars)}</div>
            <div class="rate-score">${review.stars}</div>
        </div>
        <div class="detail-review">${review.review}</div>
        <div class="review-day">${review.date}</div>
    `;

    reviewContainer.prepend(reviewDiv); // แสดงรีวิวใหม่ที่ด้านบน
}
