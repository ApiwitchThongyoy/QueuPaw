document.addEventListener('DOMContentLoaded', (event) => {
    // Retrieve data from local storage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const number = localStorage.getItem('number'); // Retrieve the number value

    // Populate the fields with the retrieved data
    const usernameInput = document.getElementById('username');
    const usernameLink = document.getElementById('usernameLink');
    const emailInput = document.getElementById('emailInput');
    const numberInput = document.getElementById('number'); // Use the correct ID

    if (usernameInput) usernameInput.value = username || '';
    if (usernameLink) usernameLink.textContent = username || 'xxxx xxxxx';
    if (emailInput) emailInput.value = email || '';
    if (numberInput) numberInput.value = number || ''; // Set the value of the number input
});

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}

function toggleEdit() {
    const fields = ['username', 'emailInput', 'number'];
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
    const username = document.getElementById('username').value;
    const email = document.getElementById('emailInput').value;
    const number = document.getElementById('number').value; // Use the correct ID

    // Save the updated data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('number', number); // Save the number value

    // Update the link text
    document.getElementById('usernameLink').textContent = username;

    // Make the fields read-only again
    toggleEdit();
    document.querySelector('.button[onclick="saveChanges()"]').style.display = 'none';
}