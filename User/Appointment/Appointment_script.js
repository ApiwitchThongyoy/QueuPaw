document.addEventListener("DOMContentLoaded", function () {
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

        // Handle cancellation
        appointmentDiv.querySelector('.cancel-btn').addEventListener('click', function () {
            const userCancelReason = prompt("กรุณากรอกเหตุผลในการยกเลิก:");
            if (!userCancelReason) return; // หยุดทำงานหากผู้ใช้ไม่กรอกเหตุผล
        
            cancelBooking(bookingInfo, userCancelReason); // ส่งเหตุผลไปยังฟังก์ชัน
            appointmentsContainer.removeChild(appointmentDiv);
        });
    }
});

function cancelBooking(bookingInfo,) {  // เพิ่ม userCancelReason เป็น parameter
    const userCancel = {
        clinicName: bookingInfo.clinicName,
        reason: bookingInfo.reason,
        date: bookingInfo.date,
        animalType: bookingInfo.animalType,
        time: bookingInfo.time,
        status: "userCancel",
    };

    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(userCancel);
    localStorage.setItem('history', JSON.stringify(history));
    clearBookingInfo();

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
