document.addEventListener("DOMContentLoaded", function() {
    var doctorName = localStorage.getItem('doctorname');
    var doctornameElement = document.getElementById("doctorname");
    if (doctornameElement && doctorName) {
        doctornameElement.textContent = doctorName;
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
    document.getElementById('clinicName').textContent = bookingInfo.clinicName || 'N/A';
    document.getElementById('reason').textContent = bookingInfo.reason || 'N/A';
    document.getElementById('date').textContent = bookingInfo.date || 'N/A';
    document.getElementById('animalType').textContent = bookingInfo.animalType || 'N/A';
    document.getElementById('time').textContent = bookingInfo.time || 'N/A';
});