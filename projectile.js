var c = document.getElementById("canvas");
var ctx =c.getContext("2D");
c.width =450;
c.height =300;


var angle = document.getElementById("dbox");
var g = 1;
var v = 50;
var yvel = Math.sin(toRadians(angle))*V;
var xvel = Math.cos(toRadians(angle))*v;
var x = 0;
var y = 300;
var oldx = 0;
var oldy = 300;
var myInterval = setInterval(function()
{
  x = x + (xvel/100);
  y = y + (yvel/100-g/(2*100*100));
  ctx.beginPath();
  ctx.moveTo(oldx, oldy);
  ctx.lineTo(x,y);
  ctx.stroke();
  
  oldx = x;
  oldy = y;
  
   if (y>c.height) {clearInterval(myInterval);}
  },10);
                             
  function toRadians (angle) {
  return angle * (Math.PI / 180);
}