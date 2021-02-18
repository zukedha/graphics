const canvas = document.getElementById("circlechart");
const graphics = canvas.getContext("2d");

const rWidth= 10, rHeight=10;
var maxX = canvas.width - 1, maxY = canvas.height - 1,
      pixelSize = Math.max(rWidth/maxX, rHeight/maxY),
      centerX = maxX/2, centerY = maxY/2;
      
function iX( x){return Math.round(centerX + x/pixelSize);}
function iY( y){return Math.round(centerY - y/pixelSize);}

graphics.arc(iX(0), iY(0), Math.abs(iX(4)-iX(0)), 0,2*Math.PI, false);
graphics.stroke();

graphics.fillText("Lienzo listo", iX(2), iY(3.7));