function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}


//SERVICES SECTION
function showServiceInfo(serviceName) {
    let message;
    switch (serviceName) {
        case 'Residential':
            message = "We provide top-notch residential construction services, focusing on customer satisfaction and quality.";
            break;
        case 'Commercial':
            message = "Our commercial services include office spaces, retail centers, and other business structures.";
            break;
        case 'Renovation':
            message = "We specialize in renovations, turning old structures into modern and functional spaces.";
            break;
        case 'Consultation':
            message = "Get expert consultation to help you plan your construction projects efficiently.";
            break;
        default:
            message = "Service information not available.";
    }
    alert(message);
}




//TESTIMONIALS SECTION
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop back to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to first slide
    }
    showSlide(currentSlide);
}

// Automatic slide change every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Show the first slide initially
showSlide(currentSlide);



//PROCESS SECTION
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    // Function to check if the step is in the viewport
    function checkStepInView() {
        steps.forEach((step) => {
            const rect = step.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                step.classList.add('active');
            }
        });
    }

    // Add event listener for scroll
    window.addEventListener('scroll', checkStepInView);
    // Check on load
    checkStepInView();
});








// Smooth scroll for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId); // Select the target section
        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start' // Align to the top
        });
    });
});









