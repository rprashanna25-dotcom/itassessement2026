let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) 
{
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide()
{
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide()
{
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// auto slide every 5 seconds
setInterval(() => 
{
    nextSlide();
}, 5000);

// keyboard support
document.addEventListener('keydown', function(e) 
{
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});
        
