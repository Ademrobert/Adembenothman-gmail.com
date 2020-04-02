let iconMenu = document.querySelector('.icon-menu');

let menu = document.querySelector('.menu');
let menuLink = document.querySelectorAll('.menu-link.sub');

// hamburger click listener

iconMenu.addEventListener('click', openMenu);

// for submenu listener

menuLink.forEach((element) => {
    element.addEventListener('click', openSubMenu);
})


function openMenu() {

    if (menu.classList.contains('open')) {
        menu.classList.add('close');
        iconMenu.classList.remove('icon-closed');

        // also remove open class after 1s
        setTimeout(() => {
            menu.classList.remove('open')
        }, 1300);
    } else {
        menu.classList.remove('close');
        menu.classList.add('open');
        iconMenu.classList.add('icon-closed');
    }
}

// openSUbmenu

function openSubMenu(event) {

    if (event.currentTarget.classList.contains('active')) {

        event.currentTarget.classList.remove('active')
    } else {
        event.currentTarget.classList.add('active')
    }
}