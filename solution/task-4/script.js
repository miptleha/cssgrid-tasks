document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const burgerMenu = document.getElementById('burgerMenu');
    let isMenuActive = false;

    burgerMenu.addEventListener('click', function() {
        isMenuActive = !isMenuActive;
        if (isMenuActive) {
            navbar.classList.add('menu-active');
            burgerMenu.textContent = '✕';
        } else {
            navbar.classList.remove('menu-active');
            burgerMenu.textContent = '☰';
        }
    });

    // Handle menu item clicks
    document.querySelectorAll('.nav-menu li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-menu li').forEach(li => {
                li.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close mobile menu
            if (window.innerWidth < 600) {
                navbar.classList.remove('menu-active');
                burgerMenu.textContent = '☰';
                isMenuActive = false;
            }
        });
    });

    // Auto-close menu on resize to larger screens
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 600 && isMenuActive) {
            navbar.classList.remove('menu-active');
            burgerMenu.textContent = '☰';
            isMenuActive = false;
        }
    });
});