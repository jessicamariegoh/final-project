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

/////////////////end of off-canvas menu/////////////////////

const showModal = document.querySelector('#modal-container')
const closeModal = document.querySelector('#maybe-later')
const submitForm = document.querySelector('#submit-subscribe')


function showModalPopup () {
    showModal.style.display = 'block';
}
 

function closeModalPopup () {
    showModal.style.display = 'none';
    localStorage.setItem('popup-closed', 'true');
    console.log('popup has been closed');
}

closeModal.addEventListener('click', closeModalPopup);

function closeOnSubmit () {
    showModal.style.display = 'none';
    localStorage.setItem('popup-closed', 'true');
    console.log('form has been submitted');
}

submitForm.addEventListener('click', closeOnSubmit);

const popupDismissed = localStorage.getItem('popup-closed');

const checkPopup = localStorage.getItem('popup-closed');

// console.log(checkPopup)

if (checkPopup===null || checkPopup===undefined) {
    const modalPopup = setTimeout(showModalPopup, 20000);
}

const subscribeBtn = document.querySelector('#journal-subscribe');
subscribeBtn.addEventListener('click', showModalPopup);

//pseudocode for reference
// get value from localStorage

// if value from localStorage doesn't exist or is false
//     open the popup

// // modal
// on close or form submit run a function that puts a value in localStorage to indicate that popup has already occurred and not to reopen

//////////end of modal and localStorage//////////////

const openSearch = document.querySelector('#search-svg');
const showSearch = document.querySelector('#search-container');
const closeSearch = document.querySelector('#close-search');

function openSearchBar () {
    showSearch.classList.add('search-open');
}

openSearch.addEventListener('click', openSearchBar);

function closeSearchBar () {
    showSearch.classList.remove('search-open');
}

closeSearch.addEventListener('click', closeSearchBar);



// const openMenu = document.querySelector('#hamburger');
// const closeMenu = document.querySelector('#close');
// const showMenu = document.querySelector('#main-menu');

// function showAsideMenu () {
//     showMenu.classList.add('menu-open');
// }

// openMenu.addEventListener('click', showAsideMenu);

// function closeAsideMenu () {
//     showMenu.classList.remove('menu-open');
// }

// closeMenu.addEventListener('click', closeAsideMenu)

// function openSearchBar () {
//     showSearch.style.display = 'block';
// }

// function closeSearchBar () {
//     showSearch.style.display = 'none';
// }

// openSearch.addEventListener('click', openSearchBar);

// if (showSearch.style.display === 'block') {
//     openSearch.addEventListener('click', closeSearchBar);
// }

/////////////////end of expanding search bar////////////////







///////things that didn't work///////////

// document.querySelector("#modal-container").addEventListener('scroll', showModalPopup); -- didn't use this in the end, because it got complicated and annoying.
// function showModalPopup () {
//     if (document.documentElement.scrollTop > 1000) {
//         showModal.style.display = 'block';
//     }
// }
// document.addEventListener('scroll', showModalPopup);

//////////////////////end of modal popup/////////////////////

// const userDismissed = sessionStorage.get('dismissed');