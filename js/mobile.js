function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("home").style.backgroundImage = "url(img/award2.JPG)";
     }
    }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes