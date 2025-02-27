document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName") || "xxxxxxxxxxxxx";
    document.getElementById("username").textContent = userName;
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}