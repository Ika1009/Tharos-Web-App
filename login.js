const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent default form submission

    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        
        const data = await response.json();

        if (data.status === 'success') {
            // Handle successful login
            window.location.href = "path-to-successful-login-destination.php";
        } else {
            // Handle unsuccessful login
            alert(data.message);
        }
    } catch (error) {
        console.error('There was an error logging in:', error);
    }
});

