
const ingresos = [
    new ingresoT('Ventas','08/30/2021', 15000.00)
];

const egresos = [
    new egresoT('Renta Servidor','07/15/2021', 500)
];

const gastos = [
    new gastoT('Silla oficina','08/15/2021', 2000)
]

const ingresosdb = [];

const costosdb = [];

const gastosdb = [];

let presupuesto = ""

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarGastos();
    cargarEgresos();
    mostrarPresupuesto();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresosdb){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of costosdb){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let totalGastos = ()=>{
    let totalEgreso = 0;
    for(let gasto of gastosdb){
        totalEgreso += gasto.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - [totalEgresos()+totalGastos()];
    let porcentajeEgreso = presupuesto/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos()+totalGastos());
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-MX',{style:'currency', currency:'MXN', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-MX',{style:'percent', minimumFractionDigits:2});
}

const cargarIngresos = ()=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="elemento_descripcion">${ingreso.fecha}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="trash-outline"
                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return ingresoHTML;
}

const cargarTablaI = ()=>{
    let HTML = '';
    for(let ingreso of ingresosdb){
        HTML += crearTablaI(ingreso);
    }
    document.getElementById('filas-Ingresos').innerHTML = HTML;
}

const crearTablaI = (ingreso)=>{
    let HTML = `
    <tr>
      <th scope="row">${ingreso.descripcion}</th>
      <td>${ingreso.fecha}</td>
      <td>${formatoMoneda(ingreso.valor)}</td>
    </tr>
    `;
    return HTML;
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="elemento_descripcion">${egreso.fecha}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="trash-outline"
                onclick='eliminarEgreso(${egreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return egresoHTML;
}

const cargarTablaC = ()=>{
    let HTML = '';
    for(let costo of costosdb){
        HTML += crearTablaC(costo);
    }
    document.getElementById('filas-Costos').innerHTML = HTML;
}

const crearTablaC = (ingreso)=>{
    let ingresoHTML = `
    <tr>
      <th scope="row">${ingreso.descripcion}</th>
      <td>${ingreso.fecha}</td>
      <td>${formatoMoneda(ingreso.valor)}</td>
    </tr>
    `;
    return ingresoHTML;
}

let eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

const cargarGastos = ()=>{
    let gastosHTML = '';
    for(let gasto of gastos){
        gastosHTML += crearGastoHTML(gasto);
    }
    document.getElementById('lista-gastos').innerHTML = gastosHTML;
}

const crearGastoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="elemento_descripcion">${egreso.fecha}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="trash-outline"
                onclick='eliminarGasto(${egreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return egresoHTML;
}

const cargarTablaG = ()=>{
    let HTML = '';
    for(let gasto of gastosdb){
        HTML += crearTablaG(gasto);
    }
    document.getElementById('filas-Gastos').innerHTML = HTML;
}

const crearTablaG = (egreso)=>{
    let ingresoHTML = `
    <tr>
      <th scope="row">${egreso.descripcion}</th>
      <td>${egreso.fecha}</td>
      <td>${formatoMoneda(egreso.valor)}</td>
    </tr>
    `;
    return ingresoHTML;
}

let eliminarGasto = (id)=>{
    let indiceEliminar = gastos.findIndex(egreso => egreso.id === id);
    gastos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarGastos();
}


let agregarIngreso = ()=>{
    let forma = document.forms['forma'];
    let descripcion = forma['descripcion'];
    let fecha = forma['fechaIngreso']
    let valor = forma['valor'];
    console.log(fecha.value)
    if(descripcion.value !== '' && valor.value !== ''){
            ingresos.push( new ingresoT(descripcion.value, fecha.value, +valor.value));
            cargarCabecero();
            cargarIngresos();   
    }
}

let agregarEgreso = ()=>{
    let forma = document.forms['formaEgreso'];
    let descripcion = forma['descripcionEgreso'];
    let fecha = forma['fechaEgreso'];
    let valor = forma['valorEgreso'];
    if(descripcion.value !== '' && valor.value !== ''){
           egresos.push( new egresoT(descripcion.value, fecha.value, +valor.value));
           cargarCabecero();
           cargarEgresos();
    }
}

let agregarGasto = ()=>{
    let forma = document.forms['formaGasto'];
    let descripcion = forma['descripcionGasto'];
    let fecha = forma['fechaGasto'];
    let valor = forma['valorGasto'];
    if(descripcion.value !== '' && valor.value !== ''){
            gastos.push( new gastoT(descripcion.value, fecha.value, +valor.value));
            cargarCabecero();
            cargarGastos();
        }
}

async function mostrarPresupuesto(){

    let id_proyecto = document.getElementById('id_proyecto')
    let result = await fetch(`http://localhost:3000/presupuesto/${id_proyecto.textContent}`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
                },       
    })
    let resultado = await result.json()
    console.log(resultado)
    presupuesto = new Presupuesto(resultado.id_presupuesto, resultado.nombre_presupuesto, resultado.usuario_id)
    traerIngresos()
    traerCostos()
    traerGastos()
}

async function traerIngresos(){

    let result = await fetch(`http://localhost:3000/ingresos/${presupuesto.id_presupuesto}`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
                },       
    })
    let ingreso = await result.json()
    let resultado = Object.values(ingreso[0])
    for (let dato in resultado){
        ingresosdb.push(new Ingreso(resultado[dato].concepto, resultado[dato].fecha, resultado[dato].cantidad, resultado[dato].id_ingreso))
    }
    console.log(ingresosdb)
    cargarCabecero();
    cargarTablaI()
}

async function traerCostos(){

    let result = await fetch(`http://localhost:3000/costos/${presupuesto.id_presupuesto}`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
                },       
    })
    let costo = await result.json()
    let resultado = Object.values(costo[0])
    
    for (let dato in resultado){
        costosdb.push(new Egreso(resultado[dato].concepto, resultado[dato].fecha, resultado[dato].cantidad,resultado[dato].id_ingreso))
    }
    cargarCabecero();
    cargarTablaC()
    
    
}


async function traerGastos(){

    let result = await fetch(`http://localhost:3000/gastos/${presupuesto.id_presupuesto}`, {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
                },       
    })
    let gasto = await result.json()
    let resultado = Object.values(gasto[0])
    
    for (let dato in resultado){
        gastosdb.push(new Egreso(resultado[dato].concepto, resultado[dato].fecha, resultado[dato].cantidad,resultado[dato].id_gasto))
    }
    cargarCabecero();
    cargarTablaG()
}

const cargarColumna = ()=>{
    var mes = prompt("Introduzca el mes agregar:", "");
    if (mes == null || mes == "") {
        console.log("Has cancelado o introducido el nombre vacío")
        } else {
            var columna = document.createElement('tr')
            var tabla = document.getElementById('tablabody')
            tabla.appendChild(columna)
        }
    
    
    

}