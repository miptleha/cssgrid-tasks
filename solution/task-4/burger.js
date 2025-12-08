const navbar = document.getElementById('navbar');
const burgerMenu = document.getElementById('burgerMenu');

// Toggle mobile menu
burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('menu-active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', () => {
    navbar.classList.remove('menu-active');
});

// Prevent closing when clicking inside navbar
navbar.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close menu when clicking on any interactive element inside navbar (mobile only)
navbar.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && (e.target.closest('.nav-menu li') || e.target.closest('.btn'))) {
        navbar.classList.remove('menu-active');
    }
});

// Auto-close menu on resize to tablet/desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navbar.classList.remove('menu-active');
    }
});

// Button press effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousedown', () => btn.classList.add('pressed'));
    btn.addEventListener('mouseup', () => btn.classList.remove('pressed'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('pressed'));
});