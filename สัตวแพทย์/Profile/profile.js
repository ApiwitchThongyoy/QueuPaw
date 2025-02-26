document.addEventListener("DOMContentLoaded", function() {
    var doctorName = localStorage.getItem('doctorname');
    var doctornameElement = document.getElementById("doctorname");
    var profileNameInput = document.getElementById("profileName");

    if (doctornameElement && doctorName) {
        doctornameElement.textContent = doctorName;
    }

    if (profileNameInput && doctorName) {
        profileNameInput.value = doctorName;
    }
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}

function saveProfile() {
    var profileName = document.getElementById("profileName").value;
    localStorage.setItem('doctorname', profileName);
    alert('Profile updated successfully!');
    location.reload(); // Reload the page to reflect the changes
}
            const license = localStorage.getItem('license') || 'Default License Number';
            document.addEventListener('DOMContentLoaded', function() {
                // Fetch data from localStorage or an API
                const name = localStorage.getItem('doctorName') || 'Default Name';
                const clinicName = localStorage.getItem('clinicName') || 'Default Clinic';
                const working = localStorage.getItem('working') || 'Default Hospital/Clinic';
                const address = localStorage.getItem('address') || 'Default Address';
                const license = localStorage.getItem('license') || 'Default License Number';
    
                // Set the values of the input fields
                document.getElementById('name').value = name;
                document.getElementById('clinicName').value = clinicName;
                document.getElementById('working').value = working;
                document.getElementById('address').value = address;
                document.getElementById('license').value = license;
            });