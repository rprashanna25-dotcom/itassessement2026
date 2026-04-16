document.getElementById('contactForm').addEventListener('submit', function(e) 
{
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    
    // basic validation
    if (!name || !email || !message) {
        formMessage.innerHTML = '<p style="color:#ff0000;">Please fill all required fields.</p>';
        return;
    }
    
    //Ask @ sign in E-mail part
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.innerHTML = '<p style="color:#ff0000;">Please enter a valid email address.</p>';
        return;
    }
    
    // Success
    formMessage.innerHTML = '<p class="success">Thank you! Your message has been sent successfully.<br>We will contact you within 24 hours.</p>';
    
    // Reset form
    this.reset();
    
    console.log('%c Contact form submitted and validated!', 'color: #00ff88; font-weight: bold;');
});
        