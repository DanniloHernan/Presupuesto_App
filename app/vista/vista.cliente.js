const servClientes = require('../controlador/controlador.cliente')
const midd = require('../../middlewares/usuario.midd')

module.exports = async (app)=> {
    app.post('/nuevoUsuario', midd.chequeoRegistro, async (req,res)=>{
        let usuario = req.body
        try{
            await servClientes.crearCliente(usuario)
            res.status(201).json('Usuario creado correctamente')
        }catch(err){
            res.status(400).send('Ocurrio un error inesperado')  
        }
    })

    app.post('/login', midd.chequeoLogin, async (req,res)=>{
        let usuario = req.body
        try {
            let resultado = await servClientes.cheqCliente(usuario)
            if (resultado == true) { 
                res.redirect(301, `/inicio`)
            }
            else{
                res.status(400).send(err)
            }
        }catch (err){
            res.status(500).send('Usuario no registrado verifique sus datos')
        }
    })

    app.post('/autenticacion', async (req,res)=>{
        let usuario = req.body
        try {
            let resultado = await servClientes.cheqCliente(usuario)
            if (resultado == true) { 
                let validacion = await servClientes.generaToken(usuario)
                res.json(validacion)
            }
            else{
                res.status(400).send('Verifique sus datos')
            }
        }catch (err){
            res.status(500).send('Usuario no registrado verifique sus datos')
        }
    })

    app.get('/usuarios', midd.administradorValido, async (req,res)=>{
        try {
            let resultado = await servClientes.listarUsuarios()
            res.status(200).json(resultado)
        }catch(error) {
            console.log(error)
            res.status(400).send('Algo raro paso al intentar recuperar la lista de usuarios')
        }
    })

    app.patch('/nuevo_pass', midd.usuarioValido, async (req,res)=> {
        let email = req.body.email
        try {
            let resultado = await servClientes.modificaPass(email)
            res.json(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).send('Algo raro paso')
        }
    })

    //CRUD Login 

    app.get('/iniciar_sesion', async (req,res)=> {
        try{
            res.render("login", {})
        }catch (error) {
            res.status(500).json('Algo raro ocurrio con esta pagina')
        } 
    })

    app.get('/registro', async (req,res)=> {
        try{
            res.render("registro", {})
        }catch (error) {
            res.status(500).json('Algo raro ocurrio con esta pagina')
        } 
    })



}