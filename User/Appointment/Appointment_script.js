document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem('username');
    var usernameElement = document.getElementById("username");
    if (usernameElement && userName) {
        usernameElement.textContent = userName;
    }
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};

    const appointmentsContainer = document.getElementById("appointmentsContainer");

    if (Object.keys(bookingInfo).length > 0) {
        const appointmentDiv = document.createElement("div");
        appointmentDiv.className = "appointment";
        appointmentDiv.innerHTML = `
            <div class="appointment-card">
                <h2>รายละเอียดการนัดหมาย</h2>
                <div class="appointment-details">
                    <p><strong>ชื่อคลินิก:</strong> ${bookingInfo.clinicName}</p>
                    <p><strong>สาเหตุ/อาการ:</strong> ${bookingInfo.reason}</p>
                    <p><strong>วันที่:</strong> ${bookingInfo.date}</p>
                    <p><strong>ประเภทสัตว์:</strong> ${bookingInfo.animalType}</p>
                    <p><strong>เวลา:</strong> ${bookingInfo.time}</p>
                </div>
                <div class="button-group">
                    <button class="cancel-btn">ยกเลิกการจอง</button>
                </div>
            </div>
        `;
        appointmentsContainer.appendChild(appointmentDiv);
        appointmentDiv.querySelector('.cancel-btn').addEventListener('click', function() {  
            saveBooking(bookingInfo, "ยกเลิก()");
            appointmentsContainer.removeChild(appointmentDiv);
            clearBookingInfo();
        });
    }
});

function saveBooking(bookingInfo, status) {
    bookingInfo.status = status;
    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(bookingInfo);
    localStorage.setItem('history', JSON.stringify(history));

    if (status === "ยกเลิก") {
        const clinicName = document.getElementById('clinicName').textContent;
        const reason = document.getElementById('reason').textContent;
        const date = document.getElementById('date').textContent;
        const animalType = document.getElementById('animalType').textContent;
        const time = document.getElementById('time').textContent;

        const bookingInfo = {
            clinicName,
            reason,
            date,
            animalType,
            time,
            status: "cancelled",
            cancelReason
        };

        
    }
    alert("การจองถูกยกเลิก");
    window.location.href = "../../user/History/History.html";
}

function clearBookingInfo() {
    localStorage.removeItem('bookingInfo');
}

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}