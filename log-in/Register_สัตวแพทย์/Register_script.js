function validatedoctorName() {
    const doctorName = document.getElementById('doctorname').value;
    const doctorNameError = document.getElementById('doctornameError');
    if (doctorName.trim() === '') {
        doctorNameError.textContent = 'กรุณากรอกชื่อของคุณ';
    } else {
        doctorNameError.textContent = '';
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
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    alert("รหัส OTP ของคุณคือ " + generatedOtp);
    let otpButton = document.getElementById("otp-button");
    otpButton.disabled = true;
    let seconds = 60;
    otpButton.innerText = `รับรหัส OTP อีกครั้ง (${seconds}s)`;
    let countdown = setInterval(() => {
        seconds--;
        otpButton.innerText = `รับ OTP อีกครั้ง (${seconds}s)`;
        if (seconds === 0) {
            clearInterval(countdown);
            otpButton.innerText = "รับ OTP";
            otpButton.disabled = false;
        }
    }, 1000);
}

function register() {
    try {
        validateEmail();
        validateOtp();
        validatePassword();
        validatedoctorName();
        validateNumber();

        const email = document.getElementById('email').value;
        const otp = document.getElementById('otp').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('doctorname').value;
        const number = document.getElementById('number').value;

        const emailError = document.getElementById('emailError').textContent;
        const otpError = document.getElementById('otpError').textContent;
        const passwordError = document.getElementById('passwordError').textContent;
        const nameError = document.getElementById('doctornameError').textContent;
        const numberError = document.getElementById('numberError').textContent;

        if (!email || !otp || !password || !name || !number) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        if (emailError || otpError || passwordError || nameError || numberError) {
            alert('กรุณากรอกข้อมูลให้ถูกต้อง');
            return;
        }

        // Save the data to local storage
        localStorage.setItem('email', email);
        localStorage.setItem('otp', otp);
        localStorage.setItem('password', password);
        localStorage.setItem('doctorname', name);
        localStorage.setItem('number', number);

        alert('กรุณาทำขั้นตอนต่อไปเพื่อยืนยันตัวตน');
        window.location.href = '../verify_สัตวแพทย์/verify.html';

    } catch (error) {
        console.error('An error occurred during registration:', error);
        alert('เกิดข้อผิดพลาดขณะสมัคร');
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