const dbServicios = require('../modelo/modelo.cliente')
const jwt = require('jsonwebtoken')

//Exportamos nuestros modulos
module.exports.crearCliente = async (usuario)=> {
    let usrNuevo = [
        usuario.nombres,
        usuario.apellidos,
        usuario.email,
        usuario.usuario,
        usuario.pass,
        usuario.tipo
    ]
    try {
        let resultado = await dbServicios.nuevoCliente(usrNuevo)
        if (resultado) {
            return 'Alta de usuario correcta'
        }else {
            
            throw new Error ('Error en la creacion del usuario o el usuario ya existe')
        }

    }catch (err) {
        console.log(err)
        throw new Error ('Error en la creacion del usuario')
    }
}

module.exports.generaToken = async (data)=> {
    const resultado = jwt.sign({data} , process.env.SECRET_KEY ) //Tiempo maximo 15 minutos de validez
    return resultado
}

module.exports.verificacionCliente = async (token)=> {
    const resultado = jwt.verify(token, process.env.SECRET_KEY)
    if(resultado){
        return resultado
    }else {
        throw new Error ('Token no valido!')
    }
}

module.exports.cheqCliente = async (usr)=>{
    try {
        let resultado = await dbServicios.existenciaDeCliente (usr)
        if (resultado) {
            return resultado         
        }else {
            console.log('Usuario invalido verifique sus datos')
            return resultado
        }
    }catch (err) {
        throw new Error (err)
    }
}

module.exports.modificaPass = async (usr)=>{
    try {
        let resultado = await dbServicios.cambioPass(usr)
        if (resultado) {
            return resultado         
        }else {
            console.log('Usuario invalido verifique sus datos')
            return resultado
        }
    }catch (err) {
        throw new Error (err)
    }
}

module.exports.cheqAdmin = async (usr)=>{
    try {
        let resultado = await dbServicios.existenciaDeAdmin(usr)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('Necesita permisos de administrador para realizar esta accion')
        }
    }catch (err) {
        throw new Error (err)
    }
}

module.exports.listarUsuarios = async ()=> {
    try {
        let result = await dbServicios.verUsuarios()
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}