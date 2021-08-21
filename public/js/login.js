let inicio = document.getElementById('iniciar')

class Usuario {
    constructor (usuario, pass, token) {
        this.usuario = usuario
        this.pass = pass
        this.token = token
    }

    static async guardaUsuario (usuario) {
        localStorage.setItem('datosUsuarios', JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(localStorage.getItem('datosUsuarios'))
        return resultado
    }
}

inicio.addEventListener('click', async ()=>{

    let usuario = document.getElementById('user').value
    let pass = document.getElementById('password').value

        let resultado = await fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },       
                body: JSON.stringify({
                    "usuario" : usuario,
                    "pass": pass
                }),
                redirect: "follow"
        })


    if(resultado != false){
        let token = await fetch('http://localhost:3000/autenticacion', {
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },       
                body: JSON.stringify({
                    "usuario" : usuario,
                    "pass": pass
                }),
        })

        let auth = await token.json()

        let data = new Usuario (usuario, pass, auth)
        Usuario.guardaUsuario(data)

    }else{
        console.log("Usuario no guardado")
    }
})



