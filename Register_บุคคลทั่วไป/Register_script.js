function validateName() {
        let inputName = document.getElementById("name");
        let errorname = document.getElementById("nameError");
        let namePattern = /^(?! )[a-zA-Z0-9ก-ฮ๑-๙ ]{4,}(?<! )$/;
        if (namePattern.test(inputName.value) || inputName.value === "") {
            inputName.style.border = "1px solid green";
            errorname.innerText = "";
        } else {
            inputName.style.border = "2px solid red";
            errorname.innerText = "กรุณากรอกชื่อให้ถูกต้อง";
        }
}
function validateNumber() {
        let inputNumber = document.getElementById("number");
        let errorNumber = document.getElementById("numberError");
        let numberPattern = /^[0-9]{10}$/;
        if (numberPattern.test(inputNumber.value) || inputNumber.value === "") {
            inputNumber.style.border = "1px solid green";
            errorNumber.innerText = "";
        } else {
            inputNumber.style.border = "2px solid red";
            errorNumber.innerText = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
        }
}
function validateEmail() {
        let inputEmail = document.getElementById("email");
        let errorEmail = document.getElementById("emailError");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(inputEmail.value) || inputEmail.value === "") {
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
        if (passwordPattern.test(inputPassword.value) || inputPassword.value === "") {
            inputPassword.style.border = "1px solid green";
            errorPassword.innerText = "";
        } else {
            inputPassword.style.border = "2px solid red";
            errorPassword.innerText = "กรุณากรอกรหัสผ่านให้ถูกต้อง";
        }
}

function register() {
    const nameElement = document.getElementById("name");
    const phoneNumberElement = document.getElementById("number");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");

    if (!nameElement || !phoneNumberElement || !emailElement || !passwordElement) {
        alert("เกิดข้อผิดพลาดในการเข้าถึงองค์ประกอบของฟอร์ม");
        return;
    }

    const name = nameElement.value;
    const phoneNumber = phoneNumberElement.value;
    const email = emailElement.value;
    const password = passwordElement.value;
    const nameError = document.getElementById("name-error")?.innerText.trim() || "";
    const phoneNumberError = document.getElementById("number-error")?.innerText.trim() || "";
    const emailError = document.getElementById("email-error")?.innerText.trim() || "";
    const passwordError = document.getElementById("password-error")?.innerText.trim() || "";

    if (!name || !phoneNumber || !email || !password) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    if (nameError || phoneNumberError || emailError || passwordError) {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");
        return;
    }

    try {
        alert("สมัครสมาชิกสําเร็จ");
        window.location.href = "../Main_บุคคลทั่วไป/Main.html";
    } catch (error) {
        alert("เกิดข้อผิดพลาด: " + error.message);
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