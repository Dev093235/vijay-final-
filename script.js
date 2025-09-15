// --- Preloader ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// --- Custom Cursor ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const navItems = document.querySelectorAll('.nav-item, .logo, .btn');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'forwards' });
});

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorOutline.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('hover');
    });
});

// --- 3D Tilt Effect for Service Cards ---
const cards = document.querySelectorAll('.service-card-wrapper');
cards.forEach(card => {
    const cardContent = card.querySelector('.service-card');
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        cardContent.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        cardContent.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    observer.observe(el);
});
