export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 12;
        this.rHeight = 8;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 12;
        this.centerY = this.maxY / 8 * 7;
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
    drawRmboide(x1, y1, x2, y2, x3, y3, x4, y4, color) {
        // Color de relleno
        this.graphics.fillStyle = color;
        // Comenzamos la ruta de dibujo, o path
        this.graphics.beginPath();
        // Mover a la esquina superior izquierda
        this.graphics.moveTo(x1, y1);
        // Dibujar la línea hacia la derecha
        this.graphics.lineTo(x2, y2);
        // Ahora la que va hacia abajo
        this.graphics.lineTo(x3, y3); // A 80 porque esa es la altura
        // La que va hacia la izquierda
        this.graphics.lineTo(x4, y4);
        // Y dejamos que la última línea la dibuje JS
        this.graphics.closePath();
        // Hacemos que se dibuje
        this.graphics.stroke();
        // Lo rellenamos
        this.graphics.fill();
    }
    fx(x) {
        return Math.sin(x * 2.5);
    }
    paint() {
        let h = [19, 10, 16, 2];
        let maxEsc = 20;
        let colors = ['magenta', 'red', 'green', 'yellow'];
        this.graphics.strokeStyle = 'black';
        this.drawLine(this.iX(0), this.iY(0), this.iX(8), this.iY(0));
        this.drawLine(this.iX(0), this.iY(0), this.iX(0), this.iY(6));
        for (let y = 0.6; y <= 6; y += 1.25) {
            this.drawLine(this.iX(0.5), this.iY(y), this.iX(8), this.iY(y));
            this.drawLine(this.iX(0), this.iY(y - 0.6), this.iX(0.5), this.iY(y));
        }
        //this.graphics.strokeStyle = 'magenta';
        let ind = 0;
        for (let i = 0.5; i <= 8; i += 2) {
            //this.graphics.strokeStyle = colors[ind];
            this.graphics.fillStyle = colors[ind];
            console.log(this.rHeight * h[ind] / maxEsc);
            /*this.drawLine(this.iX(i), this.iY(6 * h[ind] / maxEsc), this.iX(i), this.iY(0.2));*/
            this.graphics.fillRect(this.iX(i), this.iY(6 * h[ind] / maxEsc), this.iX(2) - this.iX(1), this.iY(0.2) - this.iY(6 * h[ind] / maxEsc));
            this.drawRmboide(this.iX(i + 0.3), this.iY(6 * h[ind] / maxEsc + 0.3), this.iX(i + 1.3), this.iY(6 * h[ind] / maxEsc + 0.3), this.iX(i + 1), this.iY(6 * h[ind] / maxEsc), this.iX(i), this.iY(6 * h[ind] / maxEsc), colors[ind]);
            this.drawRmboide(this.iX(i + 1), this.iY(6 * h[ind] / maxEsc), this.iX(i + 1.3), this.iY(6 * h[ind] / maxEsc + 0.3), this.iX(i + 1.3), this.iY(0.5), this.iX(i + 1), this.iY(0.2), colors[ind]);
            ind++;
        }
        ind = 0;
        for (let x = 0; x < 8; x += 2) {
            this.graphics.strokeText(colors[ind++], this.iX(x + 0.5), this.iY(-0.5));
        }
        for (let y = 0; y < h.length; y++) {
            this.graphics.strokeText(colors[y], this.iX(9), this.iY(5 - y));
            this.graphics.fillStyle = colors[y];
            this.graphics.fillRect(this.iX(8.5), this.iY(5 - y), 10, 10);
        }
        /* //dibuja la cuadricula
         this.graphics.strokeStyle = 'lightgray';
         for (let x = -3; x <= 3; x+=0.25){
           this.drawLine(this.iX(x), this.iY(-2), this.iX(x), this.iY(2));
         }
         for (let y = -2; y <= 2; y+=0.25){
           this.drawLine(this.iX(-3), this.iY(y), this.iX(3), this.iY(y));
         }
         //dibuja las divisiones
         this.graphics.strokeStyle = 'black';
         for (let x = -3; x <= 3; x++){
           this.drawLine(this.iX(x), this.iY(-0.1), this.iX(x), this.iY(0.1));
           this.graphics.strokeText(x+"", this.iX(x-0.1), this.iY(-0.2));
         }
         for (let y = -2; y <= 2; y++){
           this.drawLine(this.iX(-0.1), this.iY(y), this.iX(0.1), this.iY(y));
         }
         this.graphics.strokeText("X", this.iX(2.9), this.iY(0.2));
         this.graphics.strokeText("Y", this.iX(-0.2), this.iY(1.8));
         //dibujar la funcion
         this.graphics.strokeStyle = 'red';
         let paso: number = 0.1;
         for (let x = -3; x <= 3; x+=paso){
           this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x+paso), this.iY(this.fx(x+paso)));
         }
       */
    }
}
