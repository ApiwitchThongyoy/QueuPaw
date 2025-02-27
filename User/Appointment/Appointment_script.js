document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem('username');
    var usernameElement = document.getElementById("username");
    if (usernameElement && userName) {
        usernameElement.textContent = userName;
    }

    // Fetch booking information from localStorage
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};

    // Set the values of the appointment details
    document.getElementById('clinicName').textContent = bookingInfo.clinicName || 'N/A';
    document.getElementById('reason').textContent = bookingInfo.reason || 'N/A';
    document.getElementById('date').textContent = bookingInfo.date || 'N/A';
    document.getElementById('animalType').textContent = bookingInfo.animalType || 'N/A';
    document.getElementById('time').textContent = bookingInfo.time || 'N/A';
});

function confirmBooking() {
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
        status: "confirmed"
    };

    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(bookingInfo);
    localStorage.setItem('history', JSON.stringify(history));

    alert("การจองสำเร็จ");
    clearBookingInfo();
    window.location.href = "../../สัตวแพทย์/History/History.html";
}

function cancelBooking() {
    const cancelReason = prompt("กรุณากรอกเหตุผลในการยกเลิก:");
    if (cancelReason) {
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

        let history = JSON.parse(localStorage.getItem('history')) || [];
        history.push(bookingInfo);
        localStorage.setItem('history', JSON.stringify(history));

        alert("การจองถูกยกเลิก");
        clearBookingInfo();
        window.location.href = "../../User/History/History.html";
    }
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