function dropdown() {
  var x = document.getElementById('dropdown-content');
  if (window.getComputedStyle(x).getPropertyValue('display') === 'none') {
    x.style.display = 'block';
     document.getElementById("menu").classList.toggle("change");

  } else {
    x.style.display = 'none';
    
  }

}

