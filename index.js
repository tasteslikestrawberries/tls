/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
      const dropdown = document.getElementById("dropdown");
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
    }
  }