function validateForm() {
    const name = document.getElementById('name').value;
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
        username: name,
        clinicName,
        reason,
        date,
        animalType,
        time
    };
    
    localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
    alert('การจองเสร็จแล้ว');
    window.location.href = "../Appointment/Appointment.html"; 
    return false; 
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
// จำลองข้อมูลเวลาที่ถูกจองเต็ม
const bookedSlots = {
    "2025-03-05": ["09:00", "10:00", "13:00"],  
    "2025-03-06": ["09:00", "11:00", "14:00", "15:00"],  
    "2025-03-07": ["10:00", "11:00", "13:00"],  
    "2025-03-08": ["09:00", "10:00", "13:00", "14:00"],  
    "2025-03-09": ["10:00", "11:00", "15:00"],  
    "2025-03-10": ["09:00", "13:00", "14:00"],  
    "2025-03-11": ["10:00", "11:00", "14:00", "15:00"],  
    "2025-03-12": ["09:00", "10:00", "11:00", "13:00"],  
    "2025-03-13": ["14:00", "15:00"],  
    "2025-03-14": ["09:00", "10:00", "11:00", "13:00", "14:00"],  
    "2025-03-15": ["10:00", "13:00", "15:00"],  
    "2025-03-16": ["09:00", "11:00", "14:00"],  
    "2025-03-17": ["10:00", "12:00", "15:00"],  
    "2025-03-18": ["09:00", "10:00", "13:00", "14:00", "15:00"],  
    "2025-03-19": ["11:00", "12:00", "13:00"],  
    "2025-03-20": ["09:00", "10:00", "11:00", "15:00"],  
    "2025-03-21": ["12:00", "13:00", "14:00"],  
    "2025-03-22": ["09:00", "10:00", "11:00", "13:00", "15:00"],  
    "2025-03-23": ["09:00", "12:00", "14:00"],  
    "2025-03-24": ["10:00", "11:00", "13:00", "15:00"],  
    "2025-03-25": ["09:00", "14:00", "15:00"],  
    "2025-03-26": ["10:00", "12:00", "13:00"],  
    "2025-03-27": ["09:00", "11:00", "15:00"],  
    "2025-03-28": ["10:00", "12:00", "14:00"],  
    "2025-03-29": ["09:00", "11:00", "13:00", "15:00"],  
    "2025-03-30": ["09:00", "10:00", "12:00", "14:00", "15:00"],  
    "2025-03-31": ["10:00", "11:00", "13:00"],  
};


// ฟังก์ชันตรวจสอบเวลาว่าง
function checkAvailability() {
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");
    
    const selectedDate = dateInput.value;
    
    // รีเซ็ตตัวเลือก
    for (let option of timeSelect.options) {
        option.disabled = false;
        option.textContent = option.value;  // รีเซ็ตข้อความ
    }

    if (bookedSlots[selectedDate]) {
        for (let bookedTime of bookedSlots[selectedDate]) {
            for (let option of timeSelect.options) {
                if (option.value === bookedTime) {
                    option.disabled = true;
                    option.textContent += " (เต็ม)";
                }
            }
        }
    }
}

// เรียกใช้ฟังก์ชันเมื่อมีการเปลี่ยนแปลงวันที่
document.getElementById("date").addEventListener("change", checkAvailability);

// ตรวจสอบฟอร์มก่อนส่ง
function validateForm() {
    const timeSelect = document.getElementById("time");

    if (timeSelect.value === "" || timeSelect.options[timeSelect.selectedIndex].disabled) {
        alert("กรุณาเลือกช่วงเวลาที่ว่าง");
        return false;
    }
    return true;
}
