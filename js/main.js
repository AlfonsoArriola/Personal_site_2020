/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menuBars").style.opacity = "0";
    document.getElementById("menuBars").style.transition = ".5s";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menuBars").style.opacity = "1";
  } 
