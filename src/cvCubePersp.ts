import { CanvasLocal } from "./canvasLocal.js"; 
import { Point2D } from "./Point2D.js";
import { Obj } from "./obj.js"; 

export class CvCubePersp extends CanvasLocal{
    //centerX: number; centerY:number;
    obj: Obj;
  
    constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      super(g, canvas);
      this.obj= new Obj();
    }

    line(i:number, j:number){
      let p: Point2D = this.obj.vScr[i], q = this.obj.vScr[j];
      this.graphics.beginPath();
      this.graphics.moveTo(super.iX(p.x), super.iY(p.y));
      this.graphics.lineTo(super.iX(q.x), super.iY(q.y));
      this.graphics.closePath();
      this.graphics.stroke();
    }

  paint() {
    //Dimension dim = getSize();
       //int maxX = dim.width - 1, maxY = dim.height - 1,
       //let     minMaxXY = Math.min(maxX, maxY);
       //centerX = maxX/2; centerY = maxY/2;
      this.obj.d = this.obj.rho * this.pixelSize / this.obj.objSize;
      this.obj.eyeAndScreen();
       // Horizontal edges at the bottom:
      this.line( 0, 1); this.line(1, 2); this.line(2, 3); this.line(3, 0);
       // Horizontal edges at the top:
      this.line(4, 5); this.line(5, 6); this.line(6, 7); this.line(7, 4);
       // Vertical edges:
      this.line( 0, 4); this.line(1, 5); this.line(2, 6); this.line(3, 7);
  }
}