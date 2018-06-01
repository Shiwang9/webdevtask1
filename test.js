var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;



//line
	ctx.beginPath();     
	ctx.moveTo(0,canvas.height*0.9 );
	ctx.lineTo(canvas.width,canvas.height*0.9);
	ctx.stroke();

//mountain

	ctx.beginPath();
	ctx.moveTo(canvas.width/3,canvas.height*0.9);
	ctx.bezierCurveTo(canvas.width/3,canvas.height*0.2,canvas.width*(2/3),canvas.height*0.2,canvas.width*(2/3),canvas.height*0.9);
	ctx.fill();


var img1 = new Image();   // Create new img element
img1.addEventListener('load', function() {
  ctx.drawImage(img1, canvas.width/10,canvas.height*0.85,img1.width*0.1,img1.height*0.1)
}, false);
img1.src = 't1.jpg';

var img2 = new Image();   // Create new img element
img2.addEventListener('load', function() {
  ctx.drawImage(img2, canvas.width*0.85,canvas.height*0.85,img2.width*0.1,img2.height*0.1)
}, false);
img2.src = 't2.jpg';

