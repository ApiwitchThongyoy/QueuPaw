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
document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem('username');
    var userEmail = localStorage.getItem('userEmail');
    var userNumber = localStorage.getItem('userNumber');

    var usernameElement = document.getElementById("username");
    var userNameElement = document.getElementById("userName");
    var emailElement = document.getElementById("email");
    var userNumberElement = document.getElementById("userNumber");

    if (usernameElement && userName) {
        usernameElement.textContent = userName;
    }
    if (userNameElement && userName) {
        userNameElement.textContent = userName;
    }
    if (emailElement && userEmail) {
        emailElement.textContent = `อีเมล : ${userEmail}`;
    }
    if (userNumberElement && userNumber) {
        userNumberElement.textContent = `เบอร์โทรศัพท์ : ${userNumber}`;
    }
});