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
function goToReview(clinicName) {
    localStorage.setItem("clinicName", clinicName);
    window.location.href = "../review/index.html";
}