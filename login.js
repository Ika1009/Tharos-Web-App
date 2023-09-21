const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent default form submission

    const formData = new FormData(form);

    try {
        const response = await fetch('./DB_APIs/login.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.status === 'success') {
            // Handle successful login
            document.cookie = `auth=${data.token}; path=/; max-age=86400`; // Cookie will expire in 1 day
            alert("Success");
            //window.location.href = "path-to-successful-login-destination.php";
        } else {
            // Handle unsuccessful login
            alert(data.message);
        }
    } catch (error) {
        console.error('There was an error logging in:', error);
    }
});


