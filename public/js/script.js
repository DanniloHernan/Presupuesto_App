let listProyectos = []

async function guardaProyecto (proyecto) {
  localStorage.setItem('datosProyecto', JSON.stringify(proyecto))
}

async function recuperaUsuario () {
    let resultado = await JSON.parse(localStorage.getItem('datosUsuarios'))
    return resultado
}



async function linkUsuario() {
  let datos = await recuperaUsuario()
  //let link = document.getElementById('editarPresupuesto2')

  if(datos != null){
    document.getElementById('navbarDropdown').innerHTML = datos.usuario;
    document.getElementById('login').innerHTML = 'Cerrar Sesion'

    let linklogin = document.getElementById('login')
    linklogin.setAttribute('onclick', "eliminarlogin()")

    for(let num in listProyectos){
      let link = document.getElementById(`editarPresupuesto${num}`)
      link.setAttribute('href', `http://localhost:3000/resumen/${datos.token}/${listProyectos[num].id_proyecto}`);
    }

    
  }else{
    console.log("Nadie a iniciado sesion")
  } 
}

async function mostrarProyectos(){

  let result = await fetch('http://localhost:3000/proyectos', {
              method: 'get',
              headers: {
                  "Accept": "application/json, text/plain, *,*",
                  "Content-Type": "application/json",
              },       
  
  })
  let resultado = await result.json()
  

  for(let num in resultado){
    listProyectos.push( new Proyecto(resultado[num].nombre, resultado[num].fecha, resultado[num].id_proyecto));
  }

  crearProyecto()
}


function agregarProyecto(proyecto){
  let orden = `
  <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                   <div class="icon mb-3"><img src="./iconos/ConsultoríaDePublicidadOnline.png" class="img-fluid"/></div>
                   <h4>Nombre: ${proyecto.nombre}</h4>
                   <h6>ID proyecto: ${proyecto.id_proyecto}</h6>
                   <h6>Fecha creacion proyecto: ${proyecto.fecha}</h6>
                    <a id="nuevoPresupuesto${proyecto.id}" class="btn btn-primary" href="">Nuevo</a>
                    <a id="editarPresupuesto${proyecto.id}" class="btn btn-primary" href="">Editar</a>
                    <a id="eliminarPresupuesto${proyecto.id}" class="btn btn-primary" href="">Eliminar</a>
                    <a id="nuevoPresupuesto${proyecto.id}" class="btn btn-primary my-3" href="">Enviar</a>
                </div>
  </div>
  `
  return orden;
}

function crearProyecto(){
  let carritoHTML = '';
  for(let proyecto of listProyectos){
      carritoHTML += agregarProyecto(proyecto);
  }
  document.getElementById('lista-proyectos').innerHTML = carritoHTML;
  linkUsuario()
}




async function eliminarlogin(){
    
    localStorage.clear();

}