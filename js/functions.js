function thankYou() {
    var popup = document.getElementById("thankYou");
    popup.classList.toggle("show");
}

function hideText() {
  var x = document.getElementById("aboutText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
