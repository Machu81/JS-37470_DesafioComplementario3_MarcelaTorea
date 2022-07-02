const CAPACITACIONES = []
let tabla;
let textoTotalCapacitacion;
let textoTotalGanancia;

class Capacitacion {
    constructor(id, nombre, cargaHoraria, honorariosOradorHora, precioPorHora, cupo){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.cargaHoraria = cargaHoraria,
        this.honorariosOradorHora = honorariosOradorHora;
        this.precioPorHora = precioPorHora;
        this.cupo = cupo;
    }
    calculoHonorariosOrador = () => this.honorariosOradorHora * this.cargaHoraria * this.cupo;
    calculoPrecioCapacitacion = () => this.precioPorHora * this.cargaHoraria * this.cupo;
}

function inicializarElementos(){
    tabla = document.getElementById("tablaCapacitaciones");
    textoTotalHonorarios = document.querySelector("#totalHonorarios span");
    textoTotalCapacitacion = document.querySelector("#totalPrecioCapacitacion span");
    textoTotalGanancia = document.querySelector("#totalGanancia span");
}

function registrarCapacitacion(){
    let nCapacitaciones = parseInt(prompt("¿Cuántas capacitaciones desea registrar?"));

    for (let index = 0; index < nCapacitaciones; index++){
        let id = parseInt(prompt("Ingrese el ID"));
        let nombre = prompt("Ingrese el nombre");
        let cargaHoraria = parseFloat(prompt("Ingrese carga horaria"));
        let honorariosOradorHora = parseFloat(prompt("Ingrese el precio por hora del orador"));
        let precioPorHora = parseFloat(prompt("Ingrese el precio por hora de la capacitación"));
        let cupo = parseFloat(prompt("Ingrese el cupo de inscripciones"));

        let capacitacionACargar = new Capacitacion(id, nombre, cargaHoraria, honorariosOradorHora, precioPorHora, cupo);

        CAPACITACIONES.push(capacitacionACargar)
        }
}


function agregarCapacitacionTabla(){
    CAPACITACIONES.forEach((capacitacion) => {
        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML = `
            <td>${capacitacion.id}</td>
            <td>${capacitacion.nombre}</td>
            <td>${capacitacion.cargaHoraria}</td>
            <td>${capacitacion.honorariosOradorHora}</td>
            <td>${capacitacion.precioPorHora}</td>
            <td>${capacitacion.cupo}</td>
        `;
        tabla.tBodies[0].append(filaTabla)
    });
}

function calcularTotales(){
    let totalHonorarios = 0;
    let totalPrecioCapacitacion = 0;

    totalHonorarios = CAPACITACIONES.reduce((acumulador, elemento) => acumulador + elemento.calculoHonorariosOrador(), 0);

    totalPrecioCapacitacion = CAPACITACIONES.reduce((acumulador, elemento) => acumulador + elemento.calculoPrecioCapacitacion(), 0);

    textoTotalHonorarios.innerText = totalHonorarios;
    textoTotalCapacitacion.innerText = totalPrecioCapacitacion;
    textoTotalGanancia.innerText = totalPrecioCapacitacion - totalHonorarios;
}

function main(){
    inicializarElementos();
    registrarCapacitacion();
    agregarCapacitacionTabla();
    calcularTotales();
}

main();
