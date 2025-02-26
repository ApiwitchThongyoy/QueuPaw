document.addEventListener("DOMContentLoaded", function() {
    const history = JSON.parse(localStorage.getItem('history')) || [];

    const historyContainer = document.getElementById("historyContainer");

    history.forEach(booking => {
        const bookingDiv = document.createElement("div");
        bookingDiv.className = "appointment";
        bookingDiv.innerHTML = `
            <div>
                <p class="title"><strong><i class='bx bxs-dog'></i> ${booking.animalType} </strong></p>
                <p><i class='bx bxs-user'></i>เจ้าของ: ${booking.username} </p>
                <p><i class='bx bxs-time'></i> เวลา: ${booking.time}</p>
                <p><i class='bx bx-health'></i> อาการ: ${booking.reason}</p>
                <p><strong>สถานะ:</strong> ${booking.status === "confirmed" ? "ยืนยัน" : "ยกเลิก"}</p>
                ${booking.status === "cancelled" ? `<p><strong>เหตุผลในการยกเลิก:</strong> ${booking.cancelReason}</p>` : ""}
            </div>
        `;
        historyContainer.appendChild(bookingDiv);
    });
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}