import { Obj3D } from './Obj3D.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
        obj = new Obj3D();
        if (obj.read(contenido)) {
            //sDir = sDir1;
            cv = new CvHLines(graphics, canvas);
            cv.setObj(obj);
            cv.paint();
        }
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
            alert('datos no validos');
    }
    else
        alert('aun no has leido un archivo');
}
function eyeDownFunc() {
    vp(0, 0.1, 1);
}
function eyeUpFunc() {
    vp(0, -0.1, 1);
}
function eyeLeftFunc() {
    vp(-0.1, 0, 1);
}
function eyeRightFunc() {
    vp(0.1, 0, 1);
}
function incrDistFunc() {
    vp(0, 0, 2);
}
function decrDistFunc() {
    vp(0, 0, 0.5);
}
function pza1DerFunc() {
    var af = 10;
    Rota3D.initRotate(obj.w[301], obj.w[302], af * Math.PI / 180);
    for (var i = 21; i <= 28; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza12MoveFunc() {
    var af = -10;
    Rota3D.initRotate(obj.w[299], obj.w[300], af * Math.PI / 180);
    for (var i_1 = 29; i_1 <= 36; i_1++) {
        obj.w[i_1] = Rota3D.rotate(obj.w[i_1]);
    }
    cv.setObj(obj);
    cv.paint();
    var af2 = 10;
    Rota3D.initRotate(obj.w[301], obj.w[302], af2 * Math.PI / 180);
    for (var i_2 = 21; i_2 <= 28; i_2++) {
        obj.w[i_2] = Rota3D.rotate(obj.w[i_2]);
    }
    cv.setObj(obj);
    cv.paint();
    var tr = -0.2;
    for (var i = 13; i <= 20; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = -0.2;
    for (var i = 40; i <= 63; i++) {
        obj.w[i].x = obj.w[i].x + tr2;
    }
    cv.setObj(obj);
    cv.paint();
}
function trayecto() {
    var tr = 1;
    for (var i = 7; i <= 8; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = 1;
    for (var i = 13; i <= 14; i++) {
        obj.w[i].x = obj.w[i].x + tr2;
    }
    cv.setObj(obj);
    cv.paint();
}
function pza12MoveRetunFunc() {
    var af = 10;
    Rota3D.initRotate(obj.w[299], obj.w[300], af * Math.PI / 180);
    for (var i_3 = 29; i_3 <= 36; i_3++) {
        obj.w[i_3] = Rota3D.rotate(obj.w[i_3]);
    }
    cv.setObj(obj);
    cv.paint();
    var af2 = -10;
    Rota3D.initRotate(obj.w[301], obj.w[302], af2 * Math.PI / 180);
    for (var i_4 = 21; i_4 <= 28; i_4++) {
        obj.w[i_4] = Rota3D.rotate(obj.w[i_4]);
    }
    cv.setObj(obj);
    cv.paint();
    var tr = 0.2;
    for (var i = 13; i <= 20; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = 0.2;
    for (var i = 40; i <= 63; i++) {
        obj.w[i].x = obj.w[i].x + tr2;
    }
    cv.setObj(obj);
    cv.paint();
}
function pza1IzqFunc() {
    var af = -10;
    Rota3D.initRotate(obj.w[299], obj.w[300], af * Math.PI / 180);
    for (var i = 29; i <= 36; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza12DerFunc() {
    var af = 10;
    console.log(obj.w[29], obj.w[30], obj.w[6]);
    Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
    for (var i = 101; i <= 140; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza12IzqFunc() {
    var af = -10;
    console.log(obj.w[29], obj.w[30]);
    Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
    for (var i = 101; i <= 140; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function cerrarDedo() {
    var af = -10;
    console.log(obj.w[9], obj.w[16]);
    Rota3D.initRotate(obj.w[9], obj.w[16], af * Math.PI / 180);
    for (var i = 9; i <= 16; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 49; i <= 56; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
}
// opciones de vista
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);
//movimiento de piezas
document.getElementById('pza1Izq').addEventListener('click', pza1IzqFunc, false);
document.getElementById('pza1Der').addEventListener('click', pza1DerFunc, false);
document.getElementById('pza12Izq').addEventListener('click', pza12IzqFunc, false);
document.getElementById('pza12Der').addEventListener('click', pza12DerFunc, false);
document.getElementById('pza12Move').addEventListener('click', pza12MoveFunc, false);
document.getElementById('pza12MoveRe').addEventListener('click', pza12MoveRetunFunc, false);
document.getElementById('Desplazamiento').addEventListener('click', trayecto, false);
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
        vp(0, 0.1 * difY / 50, 1);
        Piy = Pfy;
        vp(0.1 * difX, 0 / 50, 1);
        Pix = Pfx;
        /*if( Piy>Pfy+1 ){
          phi += SensibilidadY;
          vp(0, 0.1*, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }
    
        if(Pfy>Piy+1){
          phi -= SensibilidadY;
          vp(0,-0.1, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }*/
        /*if (Pix > Pfx + 1) {
          theta += SensibilidadX;
          vp(0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }
            
        if (Pfx > Pix + 1) {
          theta -= SensibilidadX;
          vp(-0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }*/
    }
}
function noDraw() {
    flag = false;
}
canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);
