const dbDatos = require('../modelo/modelo.datos')

module.exports.verIngreso = async (datos)=> {
    try {
        let result = await dbDatos.buscarIngreso(datos)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.listaIngresos = async (id)=> {
    try {
        let result = await dbDatos.verIngresos(id)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.nuevoIngreso = async (ingreso)=> {
    let modelo = [
        ingreso.fecha_ingreso,
        ingreso.cantidad,
        ingreso.concepto,
        ingreso.presupuesto_id
    ]
    try {
        let result = await dbDatos.altaIngreso(modelo)
        return result
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del ingreso')
    }
}

module.exports.eliminarIngreso = async (id)=> {
    try {
        let result = await dbDatos.borrarIngreso(id)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.editarIngreso = async (ing)=> {
    try {
        let result = await dbDatos.modificarIngreso(ing)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.nuevoCosto = async (costo)=> {
    let modelo = [
        costo.fecha_costo,
        costo.cantidad,
        costo.concepto,
        costo.presupuesto_id
    ]
    try {
        let result = await dbDatos.altaCosto(modelo)
        return result
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del ingreso')
    }
}

module.exports.listaCostos = async (id)=> {
    try {
        let result = await dbDatos.verCostos(id)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.verCosto = async (datos)=> {
    try {
        let result = await dbDatos.buscarCosto(datos)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.eliminarCosto = async (id)=> {
    try {
        let result = await dbDatos.borrarCosto(id)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.nuevoGasto = async (gasto)=> {
    let modelo = [
        gasto.fecha_gasto,
        gasto.cantidad,
        gasto.concepto,
        gasto.presupuesto_id
    ]
    try {
        let result = await dbDatos.altaGasto(modelo)
        return result
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del gasto')
    }
}

module.exports.listaGastos = async (id)=> {
    try {
        let result = await dbDatos.verGastos(id)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.verGasto = async (datos)=> {
    try {
        let result = await dbDatos.buscarGasto(datos)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.eliminarGasto = async (id)=> {
    try {
        let result = await dbDatos.borrarGasto(id)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}


module.exports.nuevoConceptoI = async (concepto)=> {
    let modelo = [
        concepto.concepto,
    ]
    try {
        let result = await dbDatos.altaConceptoI(modelo)
        return result
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del ingreso')
    }
}

module.exports.nuevoConceptoC = async (concepto)=> {
    let modelo = [
        concepto.concepto,
    ]
    try {
        let result = await dbDatos.altaConceptoC(modelo)
        return result
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del ingreso')
    }
}

module.exports.nuevoConceptoG = async (concepto)=> {
    let modelo = [
        concepto.concepto,
    ]
    try {
        let result = await dbDatos.altaConceptoG(modelo)
        return result
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del ingreso')
    }
}