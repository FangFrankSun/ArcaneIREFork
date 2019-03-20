function menu() {
  var x = document.getElementByClassName("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
