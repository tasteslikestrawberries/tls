var menuOpen = false; // boolean

var menuButton = document.getElementById('menu');
menuButton.addEventListener("click", dropdown);

var dropdownMenu = document.getElementsByClassName('dropdown-content')[0];
dropdownMenu.addEventListener("click", onDropdownMenuClickHandler)

function dropdown(event) {
   if (menuOpen === true) {
     closeMenu();
   } else {
     openMenu();
   }
   event.stopPropagation();
}
   
window.addEventListener('DOMContentLoaded', (event) => {
  window.addEventListener('click', onPageClickHandlerForMenu);
});


function onPageClickHandlerForMenu(event) {
  if (menuOpen === false) 
    return;

  closeMenu();
}

function onDropdownMenuClickHandler(event) {
  event.stopPropagation();
}

function openMenu() {
  menuButton.classList.add("change");
  dropdownMenu.style.display = 'block';
  menuOpen = true;
}

function closeMenu() {
  menuButton.classList.remove("change");
  dropdownMenu.style.display = 'none';
  menuOpen = false;
}


