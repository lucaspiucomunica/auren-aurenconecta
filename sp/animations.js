// Intersection Observer options
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Callback function when elements become visible
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Function to initialize animations
function initializeAnimations() {
    // Observe elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // About section animations
    document.querySelectorAll('.about .section-header, .about p, .about-subtitle').forEach((element, index) => {
        element.classList.add('animate-on-scroll');
        element.classList.add(`delay-${(index + 1) * 100}`);
        observer.observe(element);
    });

    // Speaker section animations
    document.querySelectorAll('.speaker-info, .speaker-image').forEach((element, index) => {
        element.classList.add('animate-on-scroll');
        element.classList.add(`delay-${(index + 1) * 100}`);
        observer.observe(element);
    });

    // Topics section animations
    document.querySelectorAll('.topic-card').forEach((element, index) => {
        element.classList.add('animate-on-scroll');
        element.classList.add(`delay-${(index + 1) * 100}`);
        observer.observe(element);
    });

    // CTA section animations
    document.querySelectorAll('.cta h2, .cta p, .form-container').forEach((element, index) => {
        element.classList.add('animate-on-scroll');
        element.classList.add(`delay-${(index + 1) * 100}`);
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations); 