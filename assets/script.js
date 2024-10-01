function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open)");
    icon.classList.toggle("open)");
}

document.querySelector('.hamburger-icon').addEventListener('click', function()
 {
    this.classList.toggle('open');
    document.querySelector('.menu-links').classList.toggle('open');
});

