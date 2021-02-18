import { CvCubePersp } from './cvCubePersp.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

//const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas);
const miCanvas = new CvCubePersp (graphics, canvas);
miCanvas.paint();
