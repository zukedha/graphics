export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 12;
        this.rHeight = 8;
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
    fx(x) {
        return Math.sin(x * 2.5);
    }
    paint() {
        /*this.drawLine(this.iX(-3), this.iY(0), this.iX(3), this.iY(0));
        this.drawLine(this.iX(0), this.iY(2), this.iX(0), this.iY(-2));
        //dibuja la cuadricula
        this.graphics.strokeStyle = 'lightgray';
        for (let x = -3; x <= 3; x += 0.25) {
            this.drawLine(this.iX(x), this.iY(-2), this.iX(x), this.iY(2));
        }
        for (let y = -2; y <= 2; y += 0.25) {
            this.drawLine(this.iX(-3), this.iY(y), this.iX(3), this.iY(y));
        }
        //dibuja las divisiones
        this.graphics.strokeStyle = 'black';
        for (let x = -3; x <= 3; x++) {
            this.drawLine(this.iX(x), this.iY(-0.1), this.iX(x), this.iY(0.1));
            this.graphics.strokeText(x + "", this.iX(x - 0.1), this.iY(-0.2));
        }
        for (let y = -2; y <= 2; y++) {
            this.drawLine(this.iX(-0.1), this.iY(y), this.iX(0.1), this.iY(y));
        }
        this.graphics.strokeText("X", this.iX(2.9), this.iY(0.2));
        this.graphics.strokeText("Y", this.iX(-0.2), this.iY(1.8));
        //dibujar la funcion
        this.graphics.strokeStyle = 'red';
        let paso = 0.1;
        for (let x = -3; x <= 3; x += paso) {
            this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x + paso), this.iY(this.fx(x + paso)));
        }*/
       
    }
}
