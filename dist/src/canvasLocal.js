export class CanvasLocal {
    constructor(g, canvas) {
        this.rWidth = 10.0;
        this.rHeight = 10.0;
        this.graphics = g;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    paint() {
        /*this.drawLine(this.iX(0), this.iY(0), this.iX(1), this.iY(0));
        this.drawLine(this.iX(1), this.iY(0), this.iX(1), this.iY(1));
        this.drawLine(this.iX(1), this.iY(1), this.iX(0), this.iY(1));
        this.drawLine(this.iX(0), this.iY(1), this.iX(0), this.iY(0));*/
        //triasngulo con base = 2, altura de 5
        this.drawLine(this.iX(-1), this.iY(0), this.iX(1), this.iY(0));
        this.drawLine(this.iX(1), this.iY(0), this.iX(0), this.iY(5));
        this.drawLine(this.iX(0), this.iY(5), this.iX(-1), this.iY(0));
        /*let lado = 1;
        let side = 0.95 * lado;
        let sideHalf = 0.5 * side;
        let xCenter = 320;
        let yCenter = 240;
          
        let h = sideHalf * Math.sqrt(3);
        let xA, yA, xB, yB, xC, yC,
        xA1, yA1, xB1, yB1, xC1, yC1, p, q;
        q = 0.05;
        p = 1 - q;
        /*xA = xCenter - sideHalf;
        yA = yCenter - 0.5 * h;
        xB = xCenter + sideHalf;
        yB = yA;
        xC = xCenter;
        yC = yCenter + 0.5 * h; *
    
        for (let m = 0; m < 4; m++){
          for (let n = 0; n < 4; n++){
            xA = 1+n*lado - sideHalf;
            yA = 1+m*lado - 0.5 * h;
            xB = 1+n*lado+ sideHalf;
            yB = yA;
            xC = 1+n*lado;
            yC = 1+m*lado + 0.5 * h;
            for (let i = 0; i < 20; i++){
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
    
        /* for (let i = 0; i < 50; i++){
            this.drawLine(xA, yA, xB, yB);
            this.drawLine(xB, yB, xC, yC);
            this.drawLine(xC, yC, xA, yA);
            xA1 = p * xA + q * xB;
            yA1 = p * yA + q * yB;
            xB1 = p * xB + q * xC;
            yB1 = p * yB + q * yC;
            xC1 = p * xC + q * xA;
            yC1 = p * yC + q * yA;
            xA = xA1; xB = xB1; xC = xC1;
            yA = yA1; yB = yB1; yC = yC1;
        } */
    }
}
