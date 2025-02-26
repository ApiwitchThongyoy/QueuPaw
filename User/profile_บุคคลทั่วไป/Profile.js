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