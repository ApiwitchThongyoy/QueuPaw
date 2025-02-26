document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem('username');
    var usernameElement = document.getElementById("username");
    if (usernameElement && userName) {
        usernameElement.textContent = userName;
    }

    // Fetch booking information from localStorage
    const history = JSON.parse(localStorage.getItem('history')) || [];

    // Get the history list container
    const historyList = document.getElementById('historyList');

    // Function to create a history card
    function createHistoryCard(bookingInfo) {
        const card = document.createElement('div');
        card.className = 'history-card';

        card.innerHTML = `
            <div class="history-details">
                <img src="./img/Hospital.jpeg" alt="Hospital" class="clinic-image">
                <p><strong>ชื่อคลินิก:</strong> <span>${bookingInfo.clinicName || 'N/A'}</span></p>
                <p><strong>สาเหตุ/อาการ:</strong> <span>${bookingInfo.reason || 'N/A'}</span></p>
                <p><strong>วันที่:</strong> <span>${bookingInfo.date || 'N/A'}</span></p>
                <p><strong>ประเภทสัตว์:</strong> <span>${bookingInfo.animalType || 'N/A'}</span></p>
                <p><strong>เวลา:</strong> <span>${bookingInfo.time || 'N/A'}</span></p>
                <p><strong>สถานะ:</strong> <span>${bookingInfo.status}</span></p>
                ${bookingInfo.status === "ยกเลิก" ? `<p><strong>เหตุผลในการยกเลิก:</strong> <span>${bookingInfo.cancelReason}</span></p>` : ""}
            </div>
            <div class="rating-section">
                <h3>ให้คะแนนการจอง</h3>
                <div class="stars">
                    <span class="star" data-value="1">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="5">&#9733;</span>
                </div>
            </div>
            <div class="button-group">
                <button class="rebook-btn" onclick="rebook('${bookingInfo.clinicName}')">จองอีกครั้ง</button>
            </div>
        `;

        // Add event listeners to stars for rating
        const stars = card.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-value');
                alert(`คุณให้คะแนน ${rating} ดาว`);
            });
        });

        return card;
    }

    // Append each booking info to the history list
    history.forEach(bookingInfo => {
        const card = createHistoryCard(bookingInfo);
        historyList.appendChild(card);
    });
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}

function rebook(clinicName) {
    // Store the clinic name in localStorage
    localStorage.setItem('rebookClinicName', clinicName);

    // Redirect to Booking.html for rebooking
    window.location.href = "../Booking/Booking.html";
}