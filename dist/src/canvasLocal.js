export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 10;
        this.rHeight = 10;
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
        //this.graphics.arc(this.iX(0), this.iY(0), Math.abs(this.iX(4)-this.iX(0)), 0,2*Math.PI, false);
        //this.graphics.stroke();
        //this.graphics.fillText("Lienzo listo desde ts", this.iX(2), this.iY(3.7));
        //debugger;
        //this.drawLine(320, 40, 480, 400);
        //this.drawLine(320, 40, 140, 400);
        //this.drawLine(140, 400, 480, 400);
        let lado = 200;
        let side = 0.95 * lado;
        let sideHalf = 0.5 * side;
        let xCenter = 320;
        let yCenter = 240;
        let h = sideHalf * Math.sqrt(3);
        let xA, yA, xB, yB, xC, yC, xD, yD, xE, yE, xF, yF, xG, yG, xH, yH, xA1, yA1, xB1, yB1, xC1, yC1, xD1, yD1, xE1, yE1, xF1, yF1, xG1, yG1, xH1, yH1, p, q;
        q = 0.05;
        p = 1 - q;
        /*xA = xCenter - sideHalf;
        yA = yCenter - 0.5 * h;
        xB = xCenter + sideHalf;
        yB = yA;
        xC = xCenter;
        yC = yCenter + 0.5 * h; */
        for (let m = 0; m < 4; m++) {
            for (let n = 0; n < 4; n++) {
                xA = 100 + n * lado - sideHalf + 75;
                yA = 100 + m * lado - 0.5 * h;
                xB = 100 + n * lado + sideHalf - 35;
                yB = 100 + m * lado - 0.5 * h;
                xC = 100 + n * lado - sideHalf + 205;
                yC = 100 + m * lado + 0.5 * h - 100;
                xD = 100 + n * lado - sideHalf + 150;
                yD = 100 + m * lado + 0.5 * h - 10;
                xE = 100 + n * lado + sideHalf - 130;
                yE = 100 + m * lado + 0.5 * h + 10;
                xF = 100 + n * lado + sideHalf - 170;
                yF = 100 + m * lado + 0.5 * h - 90;
                for (let i = 0; i < 50; i++) {
                    this.drawLine(xA, yA, xB, yB);
                    this.drawLine(xB, yB, xC, yC);
                    this.drawLine(xC, yC, xD, yD);
                    this.drawLine(xD, yD, xE, yE);
                    this.drawLine(xE, yE, xF, yF);
                    this.drawLine(xF, yF, xA, yA);
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
                    xF1 = p * xF + q * xA;
                    yF1 = p * yF + q * yA;
                    xA = xA1;
                    xB = xB1;
                    xC = xC1;
                    xD = xD1;
                    xE = xE1;
                    xF = xF1;
                    yA = yA1;
                    yB = yB1;
                    yC = yC1;
                    yD = yD1;
                    yE = yE1;
                    yF = yF1;
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