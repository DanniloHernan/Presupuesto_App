const presupuesto = require('../controlador/controlador.presupuestos')
const midd = require('../../middlewares/usuario.midd')

module.exports = async (app)=> {

    app.get('/proyectos', async (req,res)=> {
        try {
            let resultado = await presupuesto.buscarProyectos()
            res.json(resultado)        
        }catch (error) {
            res.status(500).send('Algo raro paso en tu peticion de ver el proyecto')
        }
    })

    app.post('/nuevo_proyecto', async (req,res)=> {
        try {
            let proyecto = req.body
            let resultado = await presupuesto.nuevoProyecto(proyecto)
            if (resultado == true){
                res.status(200).json({ message: "Proyecto registrado exitosamente", resultado}) 
              }else {
                res.status(500).send('Proyecto ya registrado')
              }        
        }catch (error) {
            res.status(500).send('Hay algun problema en tu peticion')
        }
    })

    app.post('/nuevo_presupuesto', async (req,res)=>{
        let pres = req.body
        try {
            let resultado = await presupuesto.nuevoPresupuesto(pres)
            if (resultado == true){
                res.status(200).json({ message: "Presupuesto agregado exitosamente", resultado}) 
              }else {
                res.status(500).send('Presupuesto ya registrado')
              }
        }catch (error) {
            res.status(500).send('Algo raro paso en tu intento de introducir datos de tu presupuesto')
        }

    });

    app.get('/presupuesto/:id', async (req,res)=> {
        try {
            let resultado = await presupuesto.buscarPresupuesto(req.params.id)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    });

    app.delete('/presupuesto/:id', async (req,res)=> {
        let data = req.body
        try {
            let resultado = await presupuesto.eliminaPresupuesto(req.params.id)
            if (resultado == 1){
                res.status(200).send('Presupuesto eliminado correctamente')
            }else{
                res.status(404).send('El presupuesto que quieres eliminar no se encontro')
            }
        }catch (error) {
            res.status(500).send('Algo raro paso en tu peticion verificala')
        }
    })

    app.patch('/presupuestos',midd.usuarioValido, midd.administradorValido, async (req,res)=> {
        let data = req.body
        try {
            let resultado = await presupuesto.modificaproducto(data)
            res.json(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).send('Algo raro paso')
        }
    })

    app.get('/inicio', async (req,res)=> {
        try{
            res.render("inicio", {})
        }catch (error) {
            res.status(500).json('Algo raro ocurrio con esta pagina')
        } 
    })



}