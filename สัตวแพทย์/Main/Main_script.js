document.addEventListener("DOMContentLoaded", function() {
    var doctorName = localStorage.getItem('doctorname');
    var doctornameElement = document.getElementById("doctorname");
    if (doctornameElement && doctorName) {
        doctornameElement.textContent = doctorName;
    }

    const appointments = [
        { petName: "Buddy", ownerName: "John Doe", time: "10:00 AM", symptoms: "Coughing" },
        { petName: "Max", ownerName: "Jane Smith", time: "11:00 AM", symptoms: "Limping" },
        { petName: "Bella", ownerName: "Emily Johnson", time: "12:00 PM", symptoms: "Vomiting" },
        // Add more appointments as needed
    ];

    const appointmentsContainer = document.getElementById("appointmentsContainer");

    appointments.forEach(appointment => {
        const appointmentDiv = document.createElement("div");
        appointmentDiv.className = "appointment";
        appointmentDiv.innerHTML = `
            <div>
                <p class="title"><strong><i class='bx bxs-dog'></i> ${appointment.petName} </strong></p>
                <p><i class='bx bxs-user'></i>เจ้าของ: ${appointment.ownerName} </p>
                <p><i class='bx bxs-time'></i> เวลา: ${appointment.time}</p>
                <p><i class='bx bx-health'></i> อาการ: ${appointment.symptoms}</p>
            </div>
            <div class="buttons">
                <button class="confirm"> ยืนยัน</button>
                <button class="cancel"> ยกเลิก</button>
            </div>
        `;
        appointmentsContainer.appendChild(appointmentDiv);
    });
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Fetch booking information from localStorage
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};

    // Set the values of the appointment details
    document.getElementById('clinicName').textContent = bookingInfo.clinicName || 'N/A';
    document.getElementById('reason').textContent = bookingInfo.reason || 'N/A';
    document.getElementById('date').textContent = bookingInfo.date || 'N/A';
    document.getElementById('animalType').textContent = bookingInfo.animalType || 'N/A';
    document.getElementById('time').textContent = bookingInfo.time || 'N/A';
});