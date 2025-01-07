// Smooth Scrolling for Navigation Links (Only for Same-Page Links)
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // If the link is a hash (e.g., #home), perform smooth scrolling
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // Otherwise, let the browser handle navigation (to another page)
    });
});

// Hover Animation for Portfolio Blocks
document.querySelectorAll('.portfolio-block').forEach(block => {
    block.addEventListener('mouseover', () => {
        block.style.transform = 'scale(1.1)';
    });

    block.addEventListener('mouseout', () => {
        block.style.transform = 'scale(1)';
    });
});

// Simple Form Validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields before submitting.');
        }
    });
}

// Lightbox Functionality (Only for landscape.html)
if (window.location.pathname.includes('landscape.html')) {
    const images = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = images[currentIndex].src;
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        lightboxImage.src = images[currentIndex].src;
    }

    // Assigning event listeners to images
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    // Close the lightbox when clicking the close button
    document.querySelector('.close').addEventListener('click', closeLightbox);

    // Navigation buttons
    document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
    document.querySelector('.next').addEventListener('click', () => changeImage(1));
}
