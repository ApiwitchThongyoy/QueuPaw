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
    const doctoremail = localStorage.getItem('doctoremail');
    const license = localStorage.getItem('license');
    const workingName = localStorage.getItem('workingName');

    // Populate the fields with the retrieved data
    const doctornameInput = document.getElementById('doctornameInput');
    const doctornameLink = document.getElementById('doctornameLink');
    const doctoremailInput = document.getElementById('doctoremailInput');
    const licenseInput = document.getElementById('licenseInput');
    const workingNameInput = document.getElementById('workingName');

    if (doctornameInput) doctornameInput.value = doctorname || '';
    if (doctornameLink) doctornameLink.textContent = doctorname || 'xxxx xxxxx';
    if (doctoremailInput) doctoremailInput.value = doctoremail || '';
    if (licenseInput) licenseInput.value = license || '';
    if (workingNameInput) workingNameInput.value = workingName || '';
});

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

function toggleEdit() {
    const fields = ['doctornameInput', 'doctoremailInput', 'licenseInput', 'workingName'];
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
    const doctorname = document.getElementById('doctorenameInput').value;
    const doctoremail = document.getElementById('doctoremailInput').value;
    const license = document.getElementById('licenseInput').value;
    const workingName = document.getElementById('workingName').value;

    // Save the updated data to local storage
    localStorage.setItem('doctorname', doctorname);
    localStorage.setItem('doctoremail', doctoremail);
    localStorage.setItem('license', license);
    localStorage.setItem('workingName', workingName);

    // Update the link text
    document.getElementById('doctornameLink').textContent = doctorname;

    // Make the fields read-only again
    toggleEdit();
    document.querySelector('.button[onclick="saveChanges()"]').style.display = 'none';
    alert('Changes saved successfully!');
    window.location.haf = './profile.html';
}
