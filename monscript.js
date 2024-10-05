//var scrollSpeed = 100;
//var current = 0;

function bgscroll() {
  //current += 1;
  //$('body').css("backgroundPosition", current + "px " + current/2 +"px");

  document.open();
  document.write("<h1>Out with the old, in with the new!</h1>");
  document.close();
}

setInterval("bgscroll()", 100);
