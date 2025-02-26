document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem('username');
    var usernameElement = document.getElementById("username");
    if (usernameElement && userName) {
        usernameElement.textContent = userName;
    }
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Fetch booking information from localStorage
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};

    // Set the values of the appointment details
    document.getElementById('username').textContent = bookingInfo.username || 'N/A';
    document.getElementById('clinicName').textContent = bookingInfo.clinicName || 'N/A';
    document.getElementById('reason').textContent = bookingInfo.reason || 'N/A';
    document.getElementById('date').textContent = bookingInfo.date || 'N/A';
    document.getElementById('animalType').textContent = bookingInfo.animalType || 'N/A';
    document.getElementById('time').textContent = bookingInfo.time || 'N/A';
});

function cancelBooking() {
    // Fetch booking information from localStorage
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};

    // Fetch existing canceled bookings from localStorage
    const canceledBookings = JSON.parse(localStorage.getItem('canceledBookings')) || [];

    // Add the current booking to the canceled bookings
    canceledBookings.push(bookingInfo);

    // Store the updated canceled bookings in localStorage
    localStorage.setItem('canceledBookings', JSON.stringify(canceledBookings));

    // Clear booking information from localStorage
    localStorage.removeItem('bookingInfo');

    alert('การจองถูกยกเลิกแล้ว');
    window.location.href = "../History/History.html"; // Redirect to History.html
}