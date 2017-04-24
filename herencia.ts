class Programa {
	public nombre: string;
	public version: number;


	getNombre() {
		return this.nombre;
	}

	setNombre(nombre:string) {
		this.nombre = nombre;
	}


	getVersion() {
		return this.version;
	}

	setVersion(version:number){
		this.version = version;
	}
}

class EditorVideo extends Programa{
	public timeline: number;

	setTimeLine(timeline:number) {
		this.timeline = timeline;
	}

	getTimeLine():number {
		return this.timeline;
	}

	getAllData():string {
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
	}
}

var editor = new EditorVideo();
editor.setNombre("Studio");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());

//Logica del formulario

var programas =  [];

function guardar() {
	//value = recoger el valor del input 
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString(); //recoge el id "nombre" <HTMLInputElement> = especifica el elemento a recoger

	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(8);

	programas.push(programa); //push = añade el objeto al array programas

	var list = "";
	for(var i = 0; i < programas.length; i++){
		list = list + "<li>" + programas[i].getNombre() + "</li>";
	}

	var listado = <HTMLElement> document.getElementById("listado"); //Se recoge el elemeto listado del DOM
	listado.innerHTML = list; //InnerHtml = incluye el contenido de list a listado
	(<HTMLInputElement>document.getElementById("nombre")).value = "";
}
