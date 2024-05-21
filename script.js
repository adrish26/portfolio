document.addEventListener('DOMContentLoaded', () => {
    gsap.from('nav', { duration: 1, y: '-100%', ease: 'bounce' });
    gsap.from('.section', { duration: 1, opacity: 0, stagger: 0.5 });
});