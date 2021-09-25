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
    this. rWidth = 10;
    this.rHeight= 10;
    this.maxX = canvas.width - 1
    this.maxY = canvas.height - 1;
    this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
    this.centerX = this.maxX / 2;
    this.centerY = this.maxY / 2;
  }

  iX( x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
  iY(y: number): number{ return Math.round(this.centerY - y / this.pixelSize); }
  drawLine(x1: number, y1: number, x2: number, y2:number) {
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }

    paint_Heptagono() {
    let lado = 200;
    let side = 0.95 * lado;
    let sideHalf = 0.5 * side;
    let xCenter = 320;
    let yCenter = 240;
    let h = sideHalf * Math.sqrt(3);
    let xA, yA, xB, yB, xC, yC,xD, yD, xE , yE, xF , yF, xG , yG,
        xA1, yA1, xB1, yB1, xC1, yC1, xD1, yD1, xE1 , yE1, xF1 , yF1, xG1 , yG1, p, q;
    q = 0.05;
    p = 1 - q;
    for (let m = 0; m <5; m++){
      for (let n = 0; n < 3; n++){
        xA = 100+n*lado - sideHalf +75
        yA = 100+m*lado - 0.5 * h + 50  ;
        xB = 100+n*lado + sideHalf -35 ;
        yB = 100+m*lado - 0.5 * h ;
        xC = 100+n*lado + sideHalf +34;
        yC = 100+m*lado + 0.5 * h - 115;
        xD = 100+n*lado - sideHalf +235;
        yD = 100 + m * lado + 0.5 * h - 50;
        xE = 100+n*lado + sideHalf ;
        yE = 100 + m * lado + 0.5 * h + 10;
        xF = 100+n*lado + sideHalf  - 90;
        yF = 100 + m * lado + 0.5 * h +10;
        xG = 100+n*lado + sideHalf  - 130;
        yG = 100 + m * lado + 0.5 * h - 50;
        for (let i = 0; i < 50; i++){
          this.drawLine(xA, yA, xB, yB);
          this.drawLine(xB, yB, xC, yC);
          this.drawLine(xC, yC, xD, yD);
          this.drawLine(xD, yD, xE, yE);
          this.drawLine(xE, yE, xF, yF);
          this.drawLine(xF, yF, xG, yG);
          this.drawLine(xG, yG, xA, yA);
          xA1 = p * xA + q * xB;
          yA1 = p * yA + q * yB;
          xB1 = p * xB + q * xC;
          yB1 = p * yB + q * yC;
          xC1 = p * xC + q * xD;
          yC1 = p * yC + q * yD;
          xD1 = p * xD + q * xE;
          yD1 = p * yD + q * yE;
          xE1 = p * xE + q * xF;
          yE1 = p * yE + q * yF;
          xF1 = p * xF + q * xG;
          yF1 = p * yF + q * yG;
          xG1 = p * xG + q * xA;
          yG1 = p * yG + q * yA;
          xA = xA1; xB = xB1; xC = xC1; xD = xD1; xE = xE1;xF = xF1;xG = xG1;
          yA = yA1; yB = yB1; yC = yC1; yD = yD1; yE = yE1; yF = yF1; yG = yG1;
        }
      }
    }
  }
}