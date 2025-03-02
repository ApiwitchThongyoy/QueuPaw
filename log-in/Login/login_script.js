function validateEmail() {
    let inputemail = document.getElementById("email");
    let erroremail = document.getElementById("email-error");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(inputemail.value) || inputemail.value === "") {
        inputemail.style.border = "1px solid green";
        erroremail.innerText = ""
    } else {
        inputemail.style.border = "2px solid red";
        errorEmail.innerText = "กรุณากรอกอีเมลให้ถูกต้อง"
    }
}
function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("password-error");
    
    if (password === "") {
        passwordError.innerText = "";
        document.getElementById("password").style.border = "1px solid #ccc";
    }else if (password.length < 8) {
        passwordError.innerText = "กรุณากรอกรหัสผ่านให้ถูกต้อง";
        document.getElementById("password").style.border = "2px solid red";
    }else{
        passwordError.innerText = "";
        document.getElementById("password").style.border = "1px solid #ccc";
    }
}
document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.replace("bx-hide", "bx-show");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.replace("bx-show", "bx-hide");
    }
}); 
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let registeredemail = localStorage.getItem("registeredemail");
    let registeredpassword = localStorage.getItem("registeredpassword");

    console.log("Email entered:", email);
    console.log("Password entered:", password);
    console.log("Registered email:", registeredemail);
    console.log("Registered password:", registeredpassword);

    if (email === 'doctor@gmail.com' && password === '12345678') {
        console.log("Doctor login successful");
        localStorage.setItem("registeredemail", email);
        localStorage.setItem("registeredpassword", password);
        localStorage.setItem("registeredaccount", "doctor");
        alert("ยินดีต้อนรับสู่ระบบแพทย์");
        window.location.href = "../../สัตวแพทย์/Main/Main.html";
    } else if (email === 'User@gmail.com' && password === '12345678') {
        console.log("Registered user login successful");
        alert("ยินดีต้อนรับสู่ระบบ");
        window.location.href = "../../User/Main/Main.html";
    } else if (email !== registeredemail) {
        console.log("No registered account found");
        alert("ไม่มีบัญชีที่ลงทะเบียนในระบบ กรุณาลงทะเบียนใหม่");
        window.location.href = "../Register/Register.html";
    } else {
        console.log("Incorrect password");
        alert("รหัสผ่านไม่ถูกต้อง");
        document.getElementById("password").value = "";
    }
}