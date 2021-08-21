let resultado;
const pedido = [];
let agregarcarrito = document.getElementById('compra')
let buscarProducto = document.getElementById('buscarCatalogo')



/* buscarProducto.addEventListener('click', function(){

    let buscar = document.getElementById('searchc').value
    getBusqueda(buscar)
}) */

//Login simulado

let eliminarLogin = document.getElementById('eliminar')

eliminarLogin.addEventListener('click', async ()=>{
    console.log('Boton Borrar Login')
    
    localStorage.clear();

})

//Despliegue de detalles de productos

function agregarCompra1(){
    let compra = document.getElementById('producto1')
    let precio = document.getElementById('txt1')
    let vendedor = document.getElementById('vend1')
    let modelo = document.getElementById('modelo1')
    let orden = `
    <div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra2(){
    let compra = document.getElementById('producto2')
    let precio = document.getElementById('txt2')
    let vendedor = document.getElementById('vend2')
    let modelo = document.getElementById('modelo2')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra3(){
    let compra = document.getElementById('producto3')
    let precio = document.getElementById('txt3')
    let vendedor = document.getElementById('vend3')
    let modelo = document.getElementById('modelo3')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra4(){
    let compra = document.getElementById('producto4')
    let precio = document.getElementById('txt4')
    let vendedor = document.getElementById('vend4')
    let modelo = document.getElementById('modelo4')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra5(){
    let compra = document.getElementById('producto5')
    let precio = document.getElementById('txt5')
    let vendedor = document.getElementById('vend5')
    let modelo = document.getElementById('modelo5')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra6(){
    let compra = document.getElementById('producto6')
    let precio = document.getElementById('txt6')
    let vendedor = document.getElementById('vend6')
    let modelo = document.getElementById('modelo6')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra7(){
    let compra = document.getElementById('producto7')
    let precio = document.getElementById('txt7')
    let vendedor = document.getElementById('vend7')
    let modelo = document.getElementById('modelo7')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra8(){
    let compra = document.getElementById('producto8')
    let precio = document.getElementById('txt8')
    let vendedor = document.getElementById('vend8')
    let modelo = document.getElementById('modelo8')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

function agregarCompra9(){
    let compra = document.getElementById('producto9')
    let precio = document.getElementById('txt9')
    let vendedor = document.getElementById('vend9')
    let modelo = document.getElementById('modelo9')
    let orden = `<div id="tit1" class="fs-4 fw-bold">${compra.textContent}</div>
    <p class="mt-1 fw-bold" >Precio: <div id="pre1" class="fs-5">${precio.textContent}</div></p>
    <p class="mt-1 fw-bold" >Año: <div id="mod1" class="fs-5">${modelo.textContent}</div></p>
    <p class="mt-1 fw-bold" >Vendedor: <div id="ven1" class="fs-5">${vendedor.textContent}</div></p>
    `
    document.getElementById('compras').innerHTML = orden;
}

//Despliegue de Carrito Dinamico


function agregarOrden(){
    let compra = document.getElementById('tit1')
    let precio = document.getElementById('pre1')
    pedido.push(new vehiculo(compra.textContent, precio.textContent));
    crearPedido();    
}

function agregarCarrito(pedido){
    let orden = `
    <table class="table table-info table-hover table-responsive-lg">
    <thead>
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
        </tr>
    </thead>
    
    <tbody>
    <tr>
        <td id="nfinal${pedido.id}">${pedido.nombre}</td>
        <td id="pfinal${pedido.id}">${pedido.precio}</td>
    </tr>  
    </tbody>
    </table>
    <button class="btn-danger bd-highlight" onclick="eliminarProducto(${pedido.id})">Eliminar</button>
    <hr>
    `
    return orden;
}

function crearPedido(){
    let carritoHTML = '';
    for(let ordenes of pedido){
        carritoHTML += agregarCarrito(ordenes);
    }
    document.getElementById('comprafinal').innerHTML = carritoHTML;
}

function eliminarProducto (id){
    console.log('Eliminado del Carrito')
    var aviso = window.confirm('Estas seguro que quieres eliminar este producto?');
    if (aviso === true) {
        let indiceEliminar = pedido.findIndex(producto => producto.id === id);
        pedido.splice(indiceEliminar, 1);
        crearPedido(); 
    } else { 
    console.log("Producto no eliminado")
    }
}

async function recuperaUsuario (){
    let resultado = await JSON.parse(localStorage.getItem('datosUsuarios'))
    return resultado
}

async function carritoUsuario() {
    let datos = await recuperaUsuario()
    let link = document.getElementById('carritoUsuario')
    link.setAttribute('href', `http://localhost:3000/carrito/${datos.usuario}/${datos.token}`);
}


agregarcarrito.addEventListener('click', async ()=>{
    console.log('Agregar al Carrito')

    let data = await recuperaUsuario();

    var aviso = window.confirm('Estas seguro que continuar con el pago?');
    if (aviso === true) {
            for(let ordenes of pedido){    
                let result = await fetch('http://localhost:3000/carrito', {
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${data.token}`
                },       
                body: JSON.stringify({
                    "nombre_producto" : ordenes.nombre,
                    "precio_producto": ordenes.precio,
                    "name_cliente": data.usuario
                })
            })


                
        let resultado = await result.json()
        console.log(resultado)
    }
    } else { 
    console.log("Aun no estas seguro de tu compra")
    }       
})

function crearCatalogo(){
    let catalogo = '';
    for(let item of producto.data){
        catalogo += agregarProductos(item);
    }
}

async function agregarProductos(item){

    let data = await recuperaUsuario();

    let result = await fetch('http://localhost:3000/catalogo', {
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json",
                },       
                body: JSON.stringify({
                    "nombre_producto" : item.title,
                    "precio_producto": item.price,
                    "nombre_vendedor": item.seller_contact.contact,
                    "modelo_producto": item.attributes[12].value_name,
                    "direccion_producto": item.location.address_line,
                    "condicion_producto": item.condition,
                    "imagen_producto":item.thumbnail,
                    "usuario": {
                        "usuario": data.usuario,
                        "pass": data.pass
                    }
                })
    })
}




 

