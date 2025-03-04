function validateEmail() {
    let inputemail = document.getElementById("email");
    let erroremail = document.getElementById("email-error");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputemail.value === "") {
        inputemail.style.border = "1px solid #ccc"; // ค่า default
        erroremail.innerText = "";
    } else if (emailPattern.test(inputemail.value)) {
        inputemail.style.border = "1px solid green";
        erroremail.innerText = "";
    } else {
        inputemail.style.border = "2px solid red";
        erroremail.innerText = "กรุณากรอกอีเมลให้ถูกต้อง";
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
    let registeredEmail = localStorage.getItem("email") || null;
    let registeredDoctorEmail = localStorage.getItem("doctoremail") || null;
    let registeredPassword = localStorage.getItem("password") || null;
    let registeredDoctorPassword = localStorage.getItem("doctorpassword") || null; // 

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Registered email:", registeredEmail);
    console.log("Registered doctor email:", registeredDoctorEmail);
    console.log("Registered password:", registeredPassword);
    console.log("Registered doctor password:", registeredDoctorPassword);

    // ตรวจสอบว่ามีบัญชีที่ลงทะเบียนหรือไม่
    if (!registeredEmail && !registeredDoctorEmail) {
        alert("ไม่มีบัญชีที่ลงทะเบียนในระบบ กรุณาลงทะเบียนใหม่");
        window.location.href = "../Register/Register.html";
        return;
    }

    // เช็คข้อมูลเข้าสู่ระบบ
    if (email === registeredDoctorEmail && password === registeredDoctorPassword) {
        console.log("Doctor login successful");
        localStorage.setItem("accountType", "doctor");
        alert("ยินดีต้อนรับสู่ระบบแพทย์");
        window.location.href = "../../สัตวแพทย์/Main/Main.html";
    } else if (email === registeredEmail && password === registeredPassword) {
        console.log("User login successful");
        localStorage.setItem("accountType", "user");
        alert("ยินดีต้อนรับสู่ระบบ");
        window.location.href = "../../User/Main/Main.html";
    } else {
        console.log("Incorrect email or password");
        alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        document.getElementById("password").value = "";
    }
}

