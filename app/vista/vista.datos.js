const datosServ = require('../controlador/controlador.datos')
const midd = require('../../middlewares/usuario.midd')


//exportamos los modulos que vamos a utilizar
module.exports = async (app)=> {

    app.get('/resumen/:token/:id_proyecto', midd.urlValido, async (req,res)=> {
        let id = req.params.id_proyecto
        try{
            res.render("resumen", {proyecto: id})
        }catch (error) {
            console.log(error)
            res.status(500).json('No estas autorizado para ver esta pagina')
        } 
    })

    app.get('/suma_ingresos', async (req,res)=> {
        try {
            let resultado = await datosServ.verIngreso(req.body)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Ocurrio un error en la consulta')
        }
    })

    app.get('/ingresos/:id', async (req,res)=> {
        try {
            let resultado = await datosServ.listaIngresos(req.params.id)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Ocurrio un error en la consulta')
        }
    })
    
    app.post('/ingreso', async (req,res)=>{
        let ingreso = req.body
            try {
                let resultado = await datosServ.nuevoIngreso(ingreso)
                if (resultado == true){
                    res.status(200).json({ message: "Ingreso registrado exitosamente", resultado}) 
                  }else {
                    res.status(500).send('Ingreso no registrado')
                  }    
            }catch (error) {
                res.status(500).send('Algo mal esta en tu peticion')
            }
    })

    app.delete('/ingreso/:id', midd.usuarioValido, async (req,res)=> {
        try {
            let resultado = await datosServ.eliminarIngreso(req.params.id)
            console.log(resultado)
            res.status(200).json({ message: "Ingreso borrado correctamente", resultado})
        }catch (error) {
            res.status(500).send('Algo mal esta en tu peticion')
        }
    })

    app.patch('/ingreso:id',midd.usuarioValido, async (req,res)=> {
        try {
            let resultado = await datosServ.editarIngreso(id)
            console.log(resultado)
            res.status(200).json({ message: "Ingreso modificado correctamente", resultado})
        }catch (error) {
            res.status(500).send('Algo mal esta en tu peticion')
        }
    })

    app.post('/concepto_ingreso',midd.usuarioValido, async (req,res)=>{
        let ingreso = req.body
            try {
                let resultado = await datosServ.nuevoConceptoI(ingreso)
                if (resultado == true){
                    res.status(200).json({ message: "Concepto registrado exitosamente", resultado}) 
                  }else {
                    res.status(500).send('Concepto ya registrado')
                  }    
            }catch (error) {
                res.status(500).send('Algo mal esta en tu peticion')
            }
    })

    app.post('/costo', async (req,res)=>{
        let costo = req.body
            try {
                let resultado = await datosServ.nuevoCosto(costo)
                if (resultado == true){
                    res.status(200).json({ message: "Costo registrado exitosamente", resultado}) 
                  }else {
                    res.status(500).send('Costo no registrado')
                  }   
            }catch (error) {
                res.status(500).send('Algo raro paso')
            }
    })

    app.get('/costos/:id', async (req,res)=> {
        try {
            let resultado = await datosServ.listaCostos(req.params.id)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Ocurrio un error en la consulta')
        }
    })

    app.get('/suma_costos', async (req,res)=> {
        try {
            let resultado = await datosServ.verCosto(req.body)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Ocurrio un error en la consulta')
        }
    })

    app.delete('/costos/:id',midd.usuarioValido, async (req,res)=> {
        console.log(req.headers.authorization)
        try {
            let resultado = await datosServ.eliminarCosto(req.params.id)
            console.log(resultado)
            res.status(200).json({ message: "Costo borrado correctamente", resultado})
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    })

    app.post('/concepto_costo', midd.usuarioValido, async (req,res)=>{
        let costo = req.body
            try {
                let resultado = await datosServ.nuevoConceptoC(costo)
                if (resultado == true){
                    res.status(200).json({ message: "Concepto registrado exitosamente", resultado}) 
                  }else {
                    res.status(500).send('Concepto ya registrado')
                  }    
            }catch (error) {
                res.status(500).send('Algo mal esta en tu peticion')
            }
    })

    app.post('/gasto', async (req,res)=>{
        let gasto = req.body
            try {
                let resultado = await datosServ.nuevoGasto(gasto)
                if (resultado == true){
                    res.status(200).json({ message: "Gasto registrado exitosamente", resultado}) 
                  }else {
                    res.status(500).send('Gasto no registrado')
                  }
            }catch (error) {
                res.status(500).send('Algo raro paso')
            }
    })

    app.get('/gastos/:id', async (req,res)=> {
        try {
            let resultado = await datosServ.listaGastos(req.params.id)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Ocurrio un error en la consulta')
        }
    })

    app.get('/suma_gastos', async (req,res)=> {
        try {
            let resultado = await datosServ.verGasto(req.body)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Ocurrio un error en la consulta')
        }
    })

    app.delete('/gasto/:id',midd.usuarioValido, async (req,res)=> {
        console.log(req.headers.authorization)
        try {
            let resultado = await datosServ.eliminarCosto(req.params.id)
            console.log(resultado)
            res.status(200).json({ message: "Costo borrado correctamente", resultado})
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    })


    app.post('/concepto_gasto', midd.usuarioValido, async (req,res)=>{
        let costo = req.body
            try {
                let resultado = await datosServ.nuevoConceptoG(costo)
                if (resultado == true){
                    res.status(200).json({ message: "Concepto registrado exitosamente", resultado}) 
                  }else {
                    res.status(500).send('Concepto ya registrado')
                  }    
            }catch (error) {
                res.status(500).send('Algo mal esta en tu peticion')
            }
    })

}