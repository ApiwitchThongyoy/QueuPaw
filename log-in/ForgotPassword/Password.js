function toggleInput(type) {
    var emailInput = document.getElementById('emailInput');
    var phoneInput = document.getElementById('phoneInput');
    var otpInput = document.getElementById('otpInput');

    if (type === 'email') {
        emailInput.style.display = 'block';
        phoneInput.style.display = 'none';
    } else if (type === 'phone') {
        emailInput.style.display = 'none';
        phoneInput.style.display = 'block';
    }

    otpInput.style.display = 'none';
}

let generatedOTP;

function sendOtp() {
    var emailInput = document.getElementById('emailInput');
    var phoneInput = document.getElementById('phoneInput');
    var otpInput = document.getElementById('otpInput');
    var verifyBtn = document.getElementById('verifyBtn');

    if (emailInput.style.display === 'block' && emailInput.value) {
        // Send OTP to email
        generatedOTP = generateOTP();
        console.log('OTP sent to ' + emailInput.value + ': ' + generatedOTP); // Display OTP in console
    } else if (phoneInput.style.display === 'block' && phoneInput.value) {
        // Send OTP to phone
        generatedOTP = generateOTP();
        console.log('OTP sent to ' + phoneInput.value + ': ' + generatedOTP); // Display OTP in console
    } else {
        alert('Please enter your email or phone number.');
        return;
    }

    otpInput.style.display = 'block';
    verifyBtn.style.display = 'block';
}

function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
    return otp;
}

function verifyOTP() {
    const otpInput = document.getElementById('otpInput').value;

    if (otpInput == generatedOTP) {
        alert("OTP verified successfully.");
        window.location.href = "../ResetPassword/Reset.html"; // Redirect to login page
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
