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
        button.classList.add('cursor-not-allowed', 'bg-gray-400');
        button.classList.remove('bg-custom-dark-blue');
    } else {
        button.classList.remove('cursor-not-allowed', 'bg-gray-400');
        button.classList.add('bg-custom-dark-blue');
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
            if (inputs[this.length - 2] === inputs[this.length - 1]) {
                alert('Signup successful!');
            } else {
                alert('Passwords does not match!');
            }
            // Redirect or do something else upon successful signup
        } else {
            alert('Signup failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('There was an error during the signup:', error);
        alert('There was an error during the signup. Please try again.');
    });
});
