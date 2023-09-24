const signupForm = document.getElementsByTagName("form")[0];
const inputs = signupForm.querySelectorAll('input');
const button = document.getElementById('submitButton');

function checkInputs() {
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value === '') {
            allFilled = false;
        }
    });
    button.disabled = !allFilled;
    if (button.disabled) {
        button.classList.add('cursor-not-allowed', 'opacity-50');
    } else {
        button.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Retrieve form data
    let formData = new FormData(signupForm);
    
    // Call the PHP signup endpoint
    fetch('./DB_APIs/signup.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Signup successful!');
        } else {
            alert('Signup failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('There was an error during the signup:', error);
        alert('There was an error during the signup. Please try again.');
    });
});
