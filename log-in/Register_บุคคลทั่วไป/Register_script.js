console.log("Register_script.js loaded");

function validateName() {
    let inputName = document.getElementById("name");
    let errorName = document.getElementById("nameError");
    let namePattern = /^[a-zA-Zก-ฮะ-ๅ]{2,}$/;
    if (namePattern.test(inputName.value)) {
        inputName.style.border = "1px solid green";
        errorName.innerText = "";
    } else {
        inputName.style.border = "2px solid red";
        errorName.innerText = "กรุณากรอกชื่อให้ถูกต้อง";
    }
}

function validateNumber() {
    let inputNumber = document.getElementById("number");
    let errorNumber = document.getElementById("numberError");
    let numberPattern = /^[0-9]{10}$/;
    if (numberPattern.test(inputNumber.value)) {
        inputNumber.style.border = "1px solid green";
        errorNumber.innerText = "";
    } else {
        inputNumber.style.border = "2px solid red";
        errorNumber.innerText = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)";
    }
}

function validateEmail() {
    let inputEmail = document.getElementById("email");
    let errorEmail = document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(inputEmail.value)) {
        inputEmail.style.border = "1px solid green";
        errorEmail.innerText = "";
    } else {
        inputEmail.style.border = "2px solid red";
        errorEmail.innerText = "กรุณากรอกอีเมลให้ถูกต้อง";
    }
}

function validatePassword() {
    let inputPassword = document.getElementById("password");
    let errorPassword = document.getElementById("passwordError");
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passwordPattern.test(inputPassword.value)) {
        inputPassword.style.border = "1px solid green";
        errorPassword.innerText = "";
    } else {
        inputPassword.style.border = "2px solid red";
        errorPassword.innerText = "กรุณากรอกรหัสผ่านให้ถูกต้อง (อย่างน้อย 8 ตัวอักษร ประกอบด้วยตัวอักษรและตัวเลข)";
    }
}
<<<<<<< HEAD

=======
>>>>>>> 59a6329764084064e15c513c698aa1aa5f1a1a3d
function validateOtp() {
    let inputOtp = document.getElementById("otp");
    let errorOtp = document.getElementById("otpError");
    let otpPattern = /^[0-9]{6}$/;
    if (otpPattern.test(inputOtp.value)) {
        inputOtp.style.border = "1px solid green";
        errorOtp.innerText = "";
    } else {
        inputOtp.style.border = "2px solid red";
        errorOtp.innerText = "กรุณากรอก OTP ให้ถูกต้อง";
    }
}
<<<<<<< HEAD

=======
>>>>>>> 59a6329764084064e15c513c698aa1aa5f1a1a3d
function sendOtp() {
    const email = document.getElementById("email").value;
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    console.log("Email:", email); // Display email in the console
    console.log("OTP:", otp); // Display OTP in the console
    alert("OTP ถูกส่งไปยังอีเมลของคุณแล้ว");
}
<<<<<<< HEAD

=======
>>>>>>> 59a6329764084064e15c513c698aa1aa5f1a1a3d
function register(event) {
    event.preventDefault(); // Prevent form submission
    try {
        let email = document.getElementById("email")?.value?.trim() || "";
        let otp = document.getElementById("otp")?.value?.trim() || "";
        let password = document.getElementById("password")?.value?.trim() || "";
        let name = document.getElementById("name")?.value?.trim() || "";
        let number = document.getElementById("number")?.value?.trim() || "";
        let emailError = document.getElementById("emailError")?.innerText?.trim() || "";
        let otpError = document.getElementById("otpError")?.innerText?.trim() || "";
        let passwordError = document.getElementById("passwordError")?.innerText?.trim() || "";
        let nameError = document.getElementById("nameError")?.innerText?.trim() || "";
        let numberError = document.getElementById("numberError")?.innerText?.trim() || "";

        console.log("email:", email);
        console.log("otp:", otp);
        console.log("password:", password);
        console.log("name:", name);
        console.log("number:", number);
        console.log("emailError:", emailError);
        console.log("otpError:", otpError);
        console.log("passwordError:", passwordError);
        console.log("nameError:", nameError);
        console.log("numberError:", numberError);

        if (!email || !otp || !password || !name || !number) {
            console.log("Some fields are empty");
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
        if (emailError || otpError || passwordError || nameError || numberError) {
            console.log("Some fields have errors");
            alert("กรุณากรอกข้อมูลให้ถูกต้อง");
            return;
        }

        // Store user information in localStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userName", name);
        localStorage.setItem("userNumber", number);

        console.log("All fields are valid");
        alert("สมัครสําเร็จ");
        window.location.href = "../../User/Main/Main.html";
    } catch (error) {
        console.error("An error occurred during registration:", error);
        alert("เกิดข้อผิดพลาดขณะสมัคร");
    }
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profileImage');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
