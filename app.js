// Scroll to sections smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('mobile-menu').onclick = function() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
