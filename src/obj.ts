import { Point2D } from './point2D.js';
import { Point3D } from './point3D.js';

// Contains 3D object data
export class Obj {
   rho:number; theta:number = 0.3; phi:number = 1.3; d:number; objSize:number;
   v11:number; v12:number; v13:number; v21:number; v22:number; v23:number; v32:number; v33:number; v43:number;
                     // Elements of viewing matrix V
   w:Point3D[];     // World coordinates
   vScr: Point2D[];   // Screen coordinates
   
   constructor() {
      //w = new Point3D[8];
      this.w = new Array<Point3D>(8);
      this.vScr = new Array<Point2D>(8);
      // Bottom surface:
      this.w[0] = new Point3D( 1, -1, -1);
      this.w[1] = new Point3D( 1,   1, -1);
      this.w[2] = new Point3D(-1,   1, -1);
      this.w[3] = new Point3D(-1, -1, -1);
      // Top surface:
      this.w[4] = new Point3D( 1, -1,   1);
      this.w[5] = new Point3D( 1,   1,   1);
      this.w[6] = new Point3D(-1,   1,   1);
      this.w[7] = new Point3D(-1, -1, 1);

      this.objSize = Math.sqrt (12);
         // = sqrt(2  * 2 + 2 * 2 + 2 * 2)
         // = distance between two opposite vertices.
      this.rho = 5 *  this.objSize; // For reasonable perspective effect
   }

   initPersp() {
      let costh = Math.cos(this.theta),
            sinth = Math.sin(this.theta),
            cosph = Math.cos(this.phi),
            sinph = Math.sin(this.phi);
      this.v11 = -sinth; this.v12 = -cosph * costh; this.v13 = sinph * costh;
      this.v21 = costh;  this.v22 = -cosph * sinth; this.v23 = sinph * sinth;
                    this.v32 = sinph;          this.v33 = cosph;
                                          this.v43 = -this.rho;
   }

   eyeAndScreen() {
      this.initPersp();
      for (let i = 0; i < 8; i++){
         let p: Point3D = this.w[i];
         let x = this.v11 * p.x + this.v21 * p.y,
             y = this.v12 * p.x + this.v22 * p.y + this.v32 * p.z,
             z = this.v13 * p.x + this.v23 * p.y + this.v33 * p.z + this.v43;
         this.vScr[i] = new Point2D(-this.d * x/z, -this.d * y/z);
    }
   }
}