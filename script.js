// --- Preloader ---
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    preloader.style.top = '-100vh';
});

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Hero Title Animation ---
const heroLines = gsap.utils.toArray('.hero-title .line span');
gsap.from(heroLines, {
    yPercent: 120,
    stagger: 0.1,
    duration: 1,
    ease: 'power3.out',
    delay: 1 // Delay to allow preloader to finish
});

// --- Intro Text Animation ---
const introText = document.querySelector('.intro-text');
gsap.from(introText, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: '.intro-section',
        start: 'top 70%',
        end: 'bottom 90%',
        scrub: 1
    }
});

// --- Services Section Stagger Animation ---
const serviceItems = gsap.utils.toArray('.service-item');
serviceItems.forEach(item => {
    gsap.from(item, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
        }
    });
});

// --- Horizontal Scrolling ---
const track = document.querySelector('.scroll-track');
const horizontalSection = document.querySelector('.horizontal-scroll-section');

let amount = track.offsetWidth - window.innerWidth;

gsap.to(track, {
    x: -amount,
    scrollTrigger: {
        trigger: horizontalSection,
        start: 'top top',
        end: `+=${amount}`,
        pin: true,
        scrub: 1,
        markers: false // Set to true to debug
    }
});


// --- CTA Title Animation ---
const ctaLines = gsap.utils.toArray('.cta-title span');
gsap.from(ctaLines, {
    yPercent: 120,
    stagger: 0.05,
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 60%',
    }
});

// --- Magnetic Button ---
const magneticBtn = document.querySelector('.magnetic-btn');
const btnText = document.querySelector('.btn-text');

magneticBtn.addEventListener('mousemove', (e) => {
    const rect = magneticBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btnText, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
    });
});

magneticBtn.addEventListener('mouseleave', () => {
    gsap.to(btnText, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
    });
});
