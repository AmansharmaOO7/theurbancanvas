// Urban Canvas - Exact Replica JavaScript

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Typing Effect
function typeWriter() {
    const texts = ['URBAN SPACES', 'MODERN LIVING', 'FUTURE SOLUTIONS'];
    const typedElement = document.getElementById('typed-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .service-card, .portfolio-item, .review-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Contact Form
function handleContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                formStatus.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
                
                form.reset();
                // Reset form with demo values
                form.querySelector('input[name="firstName"]').value = 'John';
                form.querySelector('input[name="lastName"]').value = 'Doe';
                form.querySelector('input[name="email"]').value = 'john.doe@example.com';
                
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 2000);
        });
    }
}

// Initialize animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .service-card, .portfolio-item, .review-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
    initAnimations();
    handleContactForm();
    animateOnScroll();
    updateActiveNav();
});

// Event listeners
window.addEventListener('scroll', function() {
    updateActiveNav();
    animateOnScroll();
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
        navMenu.classList.remove('active');
    }
});