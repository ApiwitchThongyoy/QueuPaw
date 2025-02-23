function toggleInput(type) {
            let emailInput = document.getElementById('emailInput');
            let phoneInput = document.getElementById('phoneInput');
    
            if (type === 'email') {
                emailInput.style.display = 'block';
                phoneInput.style.display = 'none';
            } else {
                emailInput.style.display = 'none';
                phoneInput.style.display = 'block';
            }
        }
