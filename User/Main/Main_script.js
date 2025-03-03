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
function bookNow(clinicName) {
    window.location.href = `../Booking/Booking.html?clinicName=${encodeURIComponent(clinicName)}`;
}
function bookkclinic(clinicName) {
    window.location.href = `../review/index.html?clinicName=${encodeURIComponent(clinicName)}`;
}
function goToReview(clinicName) {
    localStorage.setItem("selectedClinic", clinicName);
    window.location.href = "../../User/review/index.html";
}