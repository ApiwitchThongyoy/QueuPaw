function resetPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Save the new password (in a real application, you would send this to the server)
    localStorage.setItem('registeredpassword', newPassword);

    alert('Your password has been reset successfully.');
    window.location.href = '../Login/index.html';
}