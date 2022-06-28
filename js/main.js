// Select DOM Items
const menuBtn = document.squerySelector('.btn-menu');
const menu = document.squerySelector('.menu');
const menuNav = document.squerySelector('.menu-nav');
const menuBranding = document.squerySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
    } else {
        // Set Menu State
    }
}
