const openMenu = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#close');
const showMenu = document.querySelector('#main-menu');

function showAsideMenu () {
    showMenu.classList.add('menu-open');
}

openMenu.addEventListener('click', showAsideMenu);

function closeAsideMenu () {
    showMenu.classList.remove('menu-open');
}

closeMenu.addEventListener('click', closeAsideMenu)

const showModal = document.querySelector('#modal-container')
const closeModal = document.querySelector('#maybe-later')
// const modalTrigger = document.querySelector('#the-journal');

// document.querySelector("#modal-container").addEventListener('scroll', showModalPopup);

function showModalPopup () {
    if (document.documentElement.scrollTop > 1500) {
        showModal.style.display = 'block';
    }
}
document.addEventListener('scroll', showModalPopup);

function closeModalPopup () {
    showModal.style.display = 'none';
}
document.addEventListener('click', closeModalPopup);

const userDismissed = sessionStorage.get('dismissed');


