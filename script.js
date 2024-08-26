var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Wordpress Developer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loob: true
})


const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const icon = document.querySelector('.icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle the icon between sun and moon
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('sun');
        icon.classList.add('moon');
    } else {
        icon.classList.remove('moon');
        icon.classList.add('sun');
    }
});