const Usuarios = require('../../db/clientes.modelo')
const sequelize = require('sequelize')

//Exporto los modulos

module.exports.nuevoCliente = async (usr)=> {
    try {
        let resultado = await Usuarios.findOne({where:{email: usr[2]}})
        console.log(resultado)
        //let resultado = await sequelize.query(`SELECT * FROM clientes WHERE apellidos = ${usr[1]}`);
        if (resultado != null){
            return false
        }else {
            await Usuarios.create({nombres:usr[0], apellidos:usr[1],email:usr[2],usuario:usr[3],pass:usr[4],tipo:usr[5]})
            //await sequelize.query(`INSERT INTO clientes ('nombres', 'apellidos', 'email', 'usuario','pass') VALUES (?,?,?,?)`, 
            //{replacements: usr, type: sequelize.QueryTypes.SELECT})
            return true
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.existenciaDeCliente = async (usr)=>{
    let usuario = [usr.usuario , usr.pass]
    try {
        let resultado = await Usuarios.findOne({where: {usuario: `${usuario[0]}`,pass: `${usuario[1]}`}})
        //let resultado = await sequelize.query(`SELECT * FROM dbo.clientes WHERE clientes.usuario = '${usuario[0]}'`);
        if (resultado != null) {          
                return true
        }else {
            return false
        }
    }catch (err) {
        throw new Error (err)
    }
}

module.exports.existenciaDeAdmin = async (usr)=>{
    let usuario = [usr.usuario , usr.pass]
    try {
        let resultado = await Usuarios.findOne({where: {usuario: `${usuario[0]}`,pass: `${usuario[1]}`, tipo: "admin"}})
        //let resultado = await sequelize.query(`SELECT * FROM dbo.clientes WHERE clientes.usuario = '${usuario[0]}'`);
        if (resultado != null) {
            return true
        }else {
            return false
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.cambioPass = async function (usr){

    let resultado = await Usuarios.update({where: {email: usr}});
    return resultado
}

module.exports.verUsuarios = async ()=> {
    try {
        let resultado = await Usuarios.findAll()
        return resultado
    }catch (error){
        console.log(error)
        throw new Error (error)
    }
}