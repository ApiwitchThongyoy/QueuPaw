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

function validatedoctoremail() {
    const doctoremail = document.getElementById('doctoremail').value;
    const doctoremailError = document.getElementById('doctoremailError').textContent;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(doctoremail)) {
        doctoremailError.textContent = 'กรุณากรอกอีเมลที่ถูกต้อง';
    } else {
        doctoremailError.textContent = '';
    }
}

function validatedoctorpassword() {
    const doctorpassword = document.getElementById('doctorpassword').value;
    const doctorpasswordError = document.getElementById('doctorpasswordError');
    if (doctorpassword.length < 8) {
        doctorpasswordError.textContent = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
    } else {
        doctorpasswordError.textContent = '';
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
        validatedoctoremail();
        validateOtp();
        validatedoctorpassword();
        validatedoctorName();
        validateNumber();

        const doctoremail = document.getElementById('doctoremail').value;
        const otp = document.getElementById('otp').value;
        const doctorpassword = document.getElementById('doctorpassword').value;
        const name = document.getElementById('doctorname').value;
        const number = document.getElementById('number').value;

        const doctoremailError = document.getElementById('doctoremailError')?.textContent || '';
        const otpError = document.getElementById('otpError')?.textContent || '';
        const doctorpasswordError = document.getElementById('doctorpasswordError')?.textContent || '';
        const nameError = document.getElementById('doctornameError')?.textContent || '';
        const numberError = document.getElementById('numberError')?.textContent || '';

        if (!doctoremail || !otp || !doctorpassword || !name || !number) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        if (doctoremailError || otpError || doctorpasswordError || nameError || numberError) {
            alert('กรุณากรอกข้อมูลให้ถูกต้อง');
            return;
        }

        // Save the data to local storage
        localStorage.setItem('doctoremail', doctoremail);
        localStorage.setItem('otp', otp);
        localStorage.setItem('doctorpassword', doctorpassword);
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