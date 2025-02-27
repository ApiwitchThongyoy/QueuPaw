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

document.addEventListener('DOMContentLoaded', (event) => {
    // Retrieve data from local storage
    const doctorname = localStorage.getItem('doctorname');
    const email = localStorage.getItem('email');
    const license = localStorage.getItem('license');
    const clinicName = localStorage.getItem('clinicName');

    // Populate the fields with the retrieved data
    const doctornameInput = document.getElementById('doctornameInput');
    const doctornameLink = document.getElementById('doctornameLink');
    const emailInput = document.getElementById('emailInput');
    const licenseInput = document.getElementById('licenseInput');
    const clinicNameInput = document.getElementById('clinicNameInput');

    if (doctornameInput) doctornameInput.value = doctorname || '';
    if (doctornameLink) doctornameLink.textContent = doctorname || 'xxxx xxxxx';
    if (emailInput) emailInput.value = email || '';
    if (licenseInput) licenseInput.value = license || '';
    if (clinicNameInput) clinicNameInput.value = clinicName || '';
});

function toggleEdit() {
    const fields = ['doctornameInput', 'emailInput', 'licenseInput', 'clinicNameInput'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (input) {
            input.readOnly = !input.readOnly;
            input.style.border = input.readOnly ? "none" : "1px solid #000";
        }
    });
    document.querySelector('.button[onclick="saveChanges()"]').style.display = 'inline-block';
}

function saveChanges() {
    const doctorname = document.getElementById('doctornameInput').value;
    const email = document.getElementById('emailInput').value;
    const license = document.getElementById('licenseInput').value;
    const clinicName = document.getElementById('clinicNameInput').value;

    // Save the updated data to local storage
    localStorage.setItem('doctorname', doctorname);
    localStorage.setItem('email', email);
    localStorage.setItem('license', license);
    localStorage.setItem('clinicName', clinicName);

    // Update the link text
    document.getElementById('doctornameLink').textContent = doctorname;

    // Make the fields read-only again
    toggleEdit();
    document.querySelector('.button[onclick="saveChanges()"]').style.display = 'none';
}

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}

function saveProfile() {
    var profileName = document.getElementById("profileName").value;
    localStorage.setItem('doctorname', profileName);
    alert('Profile updated successfully!');
    location.reload(); // Reload the page to reflect the changes
}