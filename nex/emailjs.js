document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the email
    emailjs.send('service_6xap6ai', 'template_rsvqraq', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
    });
});
