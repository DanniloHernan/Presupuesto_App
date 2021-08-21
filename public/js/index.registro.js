let botonRegistro = document.getElementById("register")

let registro =  async () => {
    let usuarioNuevo = {
        nombres: document.getElementById('name').value,
        apellidos: document.getElementById('lastname').value,
        cumple: document.getElementById('cumpleaños').value,
        usuario: document.getElementById('usuario').value,
        correo: document.getElementById('email').value,
        contrasenia: document.getElementById('password').value,
        }
    try{
        let result = await fetch('http://localhost:3000/nuevoUsuario', {
                method: 'post',
                headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
                },       
                body: JSON.stringify({
                "nombres" : usuarioNuevo.nombres,
                "apellidos": usuarioNuevo.apellidos,
                "email": usuarioNuevo.correo,
                "usuario": usuarioNuevo.usuario,
                "pass": usuarioNuevo.contrasenia,
                "tipo": "usuario",
                "cumple": usuarioNuevo.cumple,
                })
                })

        console.log(usuarioNuevo)
    }catch(error){
        alert(`Datos ingresados incorrectos : ${error.message}`)
    }
}

botonRegistro.addEventListener('click', registro, false)