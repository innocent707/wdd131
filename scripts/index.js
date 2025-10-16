document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation
    if (name && email) {
        localStorage.setItem('contactName', name);
            localStorage.setItem('contactEmail', email);

        document.getElementById('message').innerText = 'Thank you for your submission, ' + name + '!';
        
        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('message').innerText = 'Please fill out all fields.';
    }
})