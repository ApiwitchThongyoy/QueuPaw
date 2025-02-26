document.addEventListener("DOMContentLoaded", function() {
    var doctorName = localStorage.getItem('doctorname');
    var doctornameElement = document.getElementById("doctorname");
    if (doctornameElement && doctorName) {
        doctornameElement.textContent = doctorName;
    }

    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};

    const appointmentsContainer = document.getElementById("appointmentsContainer");

    if (Object.keys(bookingInfo).length > 0) {
        const appointmentDiv = document.createElement("div");
        appointmentDiv.className = "appointment";
        appointmentDiv.innerHTML = `
            <div>
                <p class="title"><strong><i class='bx bxs-dog'></i> ${bookingInfo.animalType} </strong></p>
                <p><i class='bx bxs-user'></i>เจ้าของ: ${bookingInfo.username} </p>
                <p><i class='bx bxs-time'></i> เวลา: ${bookingInfo.time}</p>
                <p><i class='bx bx-health'></i> อาการ: ${bookingInfo.reason}</p>
            </div>
            <div class="buttons">
                <button class="confirm"> ยืนยัน</button>
                <button class="cancel"> ยกเลิก</button>
            </div>
        `;
        appointmentsContainer.appendChild(appointmentDiv);

        // Add event listeners to the buttons
        appointmentDiv.querySelector('.confirm').addEventListener('click', function() {
            saveBooking(bookingInfo, "รักษาสำเร็จ");
            appointmentsContainer.removeChild(appointmentDiv);
            clearBookingInfo();
        });
        appointmentDiv.querySelector('.cancel').addEventListener('click', function() {
            const cancelReason = prompt("กรุณากรอกเหตุผลในการยกเลิก:");
            if (cancelReason) {
                bookingInfo.cancelReason = cancelReason;
                saveBooking(bookingInfo, "ยกเลิก");
                appointmentsContainer.removeChild(appointmentDiv);
                clearBookingInfo();
            }
        });
    }
});

function saveBooking(bookingInfo, status) {
    bookingInfo.status = status;
    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(bookingInfo);
    localStorage.setItem('history', JSON.stringify(history));

    if (status === "รักษาสำเร็จ") {
        alert("การรักษาสำเร็จ");
    } else {
        alert("การจองถูกยกเลิก");
    }
    window.location.href = "../../สัตวแพทย์/History/History.html";
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