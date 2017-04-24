var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
})();
var EditorVideo = (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        _super.apply(this, arguments);
    }
    EditorVideo.prototype.setTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeLine = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    };
    return EditorVideo;
})(Programa);
var editor = new EditorVideo();
editor.setNombre("Studio");
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
//Logica del formulario
var programas = [];
function guardar() {
    //value = recoger el valor del input 
    var nombre = document.getElementById("nombre").value.toString(); //recoge el id "nombre" <HTMLInputElement> = especifica el elemento a recoger
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(8);
    programas.push(programa); //push = añade el objeto al array programas
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado"); //Se recoge el elemeto listado del DOM
    listado.innerHTML = list; //InnerHtml = incluye el contenido de list a listado
    document.getElementById("nombre").value = "";
}
