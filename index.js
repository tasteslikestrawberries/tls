/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownMenuShow(event) {
  console.log(event.target)
  console.log(event.currentTarget)
    var dropdown = document.getElementById("dropdown");
    var dropdownClasses = dropdown.className.split(" ");
    var index = dropdownClasses.indexOf("show");
    //console.log(target.className === "dropbutton");
    //console.log(event.target);
    //console.log(index);
    if (index < 0 && event.target.className === "dropbutton") {
      dropdown.classList.toggle("show");
      //console.log(index);
    } else if (index >= 0) {
      //console.log(event.target.className);
      if (event.target.className !== "dropbutton" && 
        event.target.className !== "dropdownContent") {
          dropdown.classList.toggle("show");      
        }
    }
  }

  function dropDownMenuHide(event) {
    console.log(event.target);
    var dropdown = document.getElementById("dropdown");
    if (event.target.className !== "dropbutton" && 
    event.target.className !== "dropdownContent") {
      dropdown.classList.remove("show");      
    }


  }

  /*onmouseover="dropDownMenuShow(event)"
  onmouseout="dropDownMenuHide(event)"*/



