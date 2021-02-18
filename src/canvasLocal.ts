
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
    this.rWidth = 10;
    this.rHeight= 10;
    this.maxX = canvas.width - 1
    this.maxY = canvas.height - 1;
    this.pixelSize = Math.min(this.maxX, this.maxY);//Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
    this.centerX = this.maxX / 2;
    this.centerY = this.maxY / 2;
  }

  iX( x: number):number{return Math.round(this.centerX + x);}
  iY( y: number):number{return Math.round(this.centerY - y);}

  paint() {
    this.graphics.arc(this.iX(0), this.iY(0), Math.abs(this.iX(4)-this.iX(0)), 0,2*Math.PI, false);
    this.graphics.stroke();
    this.graphics.fillText("Lienzo listo desde ts", this.iX(2), this.iY(3.7));
  }

}