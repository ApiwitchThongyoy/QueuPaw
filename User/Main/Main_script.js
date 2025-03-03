document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem('username');
    var usernameElement = document.getElementById("username");
    if (usernameElement && userName) {
        usernameElement.textContent = userName;
    }
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}
function bookNow(clinicName) {
    window.location.href = `../Booking/Booking.html?clinicName=${encodeURIComponent(clinicName)}`;
}
function bookkclinic(clinicName) {
    window.location.href = `../review/index.html?clinicName=${encodeURIComponent(clinicName)}`;
}
function goToReview(clinicName) {
    let encodedName = encodeURIComponent(clinicName); // เข้ารหัสชื่อคลินิก
    window.location.href = `../../User/review/index.html?clinic=${encodedName}`;
}
async function loadClinicData() {
    try {
        let response = await fetch("https://your-api.com/clinics");
        let clinicData = await response.json();

        // แสดงชื่อคลินิกใน div
        document.getElementById("clinicName").innerText = clinicData.name || "ไม่พบข้อมูลคลินิก";
    } catch (error) {
        console.error("Error loading clinic data:", error);
        document.getElementById("clinicName").innerText = "โหลดข้อมูลไม่สำเร็จ";
    }
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเสร็จ
document.addEventListener("DOMContentLoaded", loadClinicData);
