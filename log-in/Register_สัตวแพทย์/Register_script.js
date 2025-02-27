function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'กรุณากรอกชื่อของคุณ';
    } else {
        nameError.textContent = '';
    }
}

function validateNumber() {
    const number = document.getElementById('number').value;
    const numberError = document.getElementById('numberError');
    const numberPattern = /^[0-9]{10}$/;
    if (!numberPattern.test(number)) {
        numberError.textContent = 'กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง';
    } else {
        numberError.textContent = '';
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'กรุณากรอกอีเมลที่ถูกต้อง';
    } else {
        emailError.textContent = '';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.textContent = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
    } else {
        passwordError.textContent = '';
    }
}

function validateOtp() {
    const otp = document.getElementById('otp').value;
    const otpError = document.getElementById('otpError');
    if (otp.length !== 6 || isNaN(otp)) {
        otpError.textContent = 'กรุณากรอก OTP ที่ถูกต้อง';
    } else {
        otpError.textContent = '';
    }
}

function validateAddress() {
    let inputAddress = document.getElementById("address");
    let errorAddress = document.getElementById("addressError");
    if (inputAddress.value.trim() === "") {
        inputAddress.style.border = "2px solid red";
        errorAddress.innerText = "กรุณากรอกที่อยู่";
    } else {
        inputAddress.style.border = "1px solid green";
        errorAddress.innerText = "";
    }
}

function sendOtp() {
    const email = document.getElementById("email").value;
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    console.log("Email:", email); // Display email in the console
    console.log("OTP:", otp); // Display OTP in the console
    alert("OTP ถูกส่งไปยังอีเมลของคุณแล้ว");
}

function register() {
    try {
        validateEmail();
        validateOtp();
        validatePassword();
        validateName();
        validateNumber();

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

        console.log("Registration successful");
        alert("กรุณาทำขั้นตอนต่อไป");
        location.href = "../verify_สัตวแพทย์/Verify.html";

    } catch (error) {
        console.error("An error occurred during registration:", error);
        alert("เกิดข้อผิดพลาดขณะสมัคร");
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById('profileImage').src = reader.result;
        }
        reader.readAsDataURL(file);
    }
}