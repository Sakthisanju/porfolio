document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);

        // Validate form fields
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // You can add more complex validation here, e.g., email format

        // Send form data (this is a dummy example)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset form
        form.reset();
    });
});


