
export class CanvasLocal {
  //atributos
  protected graphics: CanvasRenderingContext2D;
  protected rWidth:number;
  protected rHeight:number;
  protected maxX: number;
  protected maxY: number;
  protected pixelSize: number;
  protected centerX: number;
  protected centerY: number;
  
      
  public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = g;
    this.rWidth = 6;
    this.rHeight= 4;
    this.maxX = canvas.width - 1
    this.maxY = canvas.height - 1;
    this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
    this.centerX = this.maxX/2;
    this.centerY = this.maxY/2;
  }

  iX(x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
  iY(y: number):number{return Math.round(this.centerY - y / this.pixelSize); }
  drawLine(x1: number, y1: number, x2: number, y2:number) {
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }

  fx(x:number):number {
    return Math.sin(x*2.5);
  }


  paint(){
    //cuadrado
   /*this.drawLine(this.iX(0),this.iY(0),this.iX(1),this.iY(0));
   this.drawLine(this.iX(1),this.iY(0),this.iX(1),this.iY(1));
   this.drawLine(this.iX(1),this.iY(1),this.iX(0),this.iY(1));
   this.drawLine(this.iX(0),this.iY(1),this.iX(0),this.iY(0)); 
    //triangulo
   this.drawLine(this.iX(-1),this.iY(0),this.iX(1),this.iY(0));
   this.drawLine(this.iX(1),this.iY(0),this.iX(0),this.iY(5));
   this.drawLine(this.iX(0),this.iY(5),this.iX(-1),this.iY(0));*/

   //dibuja la cuadricula
   this.graphics.strokeStyle = 'green';
    for (let x = -6; x <= 6; x+=1){
      this.drawLine(this.iX(x), this.iY(-4), this.iX(x), this.iY(4));
    }
    for (let y = -4; y <= 4; y+=1){
      this.drawLine(this.iX(-6), this.iY(y), this.iX(6), this.iY(y));
    }
    /*//dibuja las secciones
    this.graphics.strokeStyle = 'black';
    for (let x = -3; x <= 3; x++){
      this.drawLine(this.iX(x), this.iY(-0.1), this.iX(x), this.iY(0.1));
      this.graphics.strokeText(x+"", this.iX(x-0.1), this.iY(-0.2));
    }
    for (let y = -2; y <= 2; y++){
      this.drawLine(this.iX(-0.1), this.iY(y), this.iX(0.1), this.iY(y));
    }
    this.graphics.strokeText("X", this.iX(2.9), this.iY(0.2));
    this.graphics.strokeText("Y", this.iX(-0.2), this.iY(1.8));*/
    this.graphics.strokeStyle = 'red';
    let lado = 1;
    let side = 1.15 * lado;
    let sideHalf = 0.60 * side;
    let xCenter = 320;
    let yCenter = 240;
      
    let h = sideHalf * Math.sqrt(2);
    let xA, yA, xB, yB, xC, yC,
    xA1, yA1, xB1, yB1, xC1, yC1, p, q;
     q = 0.1;
    p = 1 - q;
    xA = xCenter - sideHalf;
    yA = yCenter - 1 * h;
    xB = xCenter + sideHalf;
    yB = yA;
    xC = xCenter;
    yC = yCenter + 1 * h;

    for (let m = -4; m < 4; m+=2){
      for (let n = -6;n <6; n+=2){
        xA = 1+n*lado - sideHalf;
        yA = 1+m*lado - 1 * h;
        xB = 1+n*lado+ sideHalf;
        yB = yA;
        xC = 1+n*lado;
        yC = 1+m*lado + 1 * h; 
        for (let i = 0; i < 25; i++){
          this.drawLine(this.iX(xA), this.iY(yA), this.iX(xB), this.iY(yB));
          this.drawLine(this.iX(xB), this.iY(yB), this.iX(xC), this.iY(yC));
          this.drawLine(this.iX(xC), this.iY(yC), this.iX(xA), this.iY(yA));
          xA1 = p * xA + q * xB;
          yA1 = p * yA + q * yB;
          xB1 = p * xB + q * xC;
          yB1 = p * yB + q * yC;
          xC1 = p * xC + q * xA;
          yC1 = p * yC + q * yA;
          xA = xA1; xB = xB1; xC = xC1;
          yA = yA1; yB = yB1; yC = yC1;
        }
      }
    }
  }

}