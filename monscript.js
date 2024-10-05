
var scrollSpeed = 100;
var current = 0;

function bgscroll() {
  current += 50;
  $('body').css("backgroundPosition", current + "px " + current/2 +"px");
}

setInterval("bgscroll()", scrollSpeed);

