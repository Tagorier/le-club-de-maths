import { next } from '@vercel/edge';

var scrollSpeed = 100;
var current = 0;

function bgscroll() {
  current += 1;
  $('body').css("backgroundPosition", current + "px " + current/2 +"px");
}

setInterval("bgscroll()", scrollSpeed);

//export default function middleware() {}
