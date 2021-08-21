const dbPresupuesto = require('../modelo/modelo.presupuestos')

module.exports.nuevoPresupuesto = async (presupuesto)=> {
    let modelo = [
        presupuesto.nombre_presupuesto,
        presupuesto.proyecto_id,
        presupuesto.usuario_id
    ]
    try {
        let result = await dbPresupuesto.altaPresupuesto(modelo)
        return result
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del presupuesto')
    }
}

module.exports.buscarProyectos = async ()=> {
    try {
        let result = await dbPresupuesto.verProyectos()
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.buscarPresupuesto = async (id)=> {
    try {
        const resultado = await dbPresupuesto.traerPresupuesto(id)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}

module.exports.eliminaPresupuesto = async (id)=> {
    try {
        const resultado = await dbPresupuesto.borrarPresupuesto(id)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}

module.exports.nuevoProyecto = async (proyecto)=> {
    let modelo = [
        proyecto.nombre,
        proyecto.version,
        proyecto.fecha
    ]
    try {
        let result = await dbPresupuesto.altaProyecto(modelo)
        return result
    }catch (error) {
        throw new Error ('Error en la alta del proyecto')
    }
}