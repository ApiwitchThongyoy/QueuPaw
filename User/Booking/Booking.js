function validateForm() {
    const reason = document.getElementById('reason').value;
    const date = document.getElementById('date').value;
    const clinicName = document.getElementById('clinicName').value;
    const animalType = document.getElementById('animalType').value;
    const time = document.getElementById('time').value;

    if (!reason || !date) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return false;
    }

    const bookingInfo = {
        clinicName,
        reason,
        date,
        animalType,
        time
    };

    localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
    alert('การจองเสร็จแล้ว');
    window.location.href = "../Appointment/Appointment.html"; // Redirect to Appointment.html
    return false; // Prevent default form submission
}

function loadUsername() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').innerText = username;
        document.getElementById('name').value = username;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to get query parameter by name
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the clinicName from the query parameter
    const clinicName = getQueryParam('clinicName') || localStorage.getItem('rebookClinicName') || 'Default Clinic';

    // Set the value of the input field
    document.getElementById('clinicName').value = clinicName;

    // Clear the rebookClinicName from localStorage
    localStorage.removeItem('rebookClinicName');

    loadUsername();
});