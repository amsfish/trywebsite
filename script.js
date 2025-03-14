// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Color change button functionality
    const changeColorBtn = document.getElementById('changeColorBtn');
    const heroSection = document.querySelector('.hero');
    
    // Array of possible background colors for the hero section
    const colors = [
        '#6c90c5', // Original color
        '#5d8aa8',
        '#4682b4',
        '#7b68ee',
        '#9370db',
        '#6a5acd'
    ];
    
    let currentColorIndex = 0;
    
    // Add click event listener to the button
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', function() {
            // Move to the next color in the array
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            
            // Apply the new background color with a smooth transition
            heroSection.style.transition = 'background-color 0.5s ease';
            heroSection.style.backgroundColor = colors[currentColorIndex];
        });
    }
    
    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('すべてのフィールドを入力してください。');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show a success message
            alert(`${name}様、お問い合わせありがとうございます。\nメッセージを受け付けました。`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            
            // Only process if it's an anchor link
            if (targetId.startsWith('#')) {
                event.preventDefault();
                
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Smooth scroll to the target section
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation to service cards when they come into view
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to handle scroll events
    function handleScroll() {
        serviceCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for service cards
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on load to check for elements already in viewport
    handleScroll();
});
