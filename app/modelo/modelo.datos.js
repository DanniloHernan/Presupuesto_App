const ingreso = require('../../db/ingreso.modelo')
const conceptoI = require('../../db/con_ingreso.modelo')
const costo = require('../../db/costo.modelo')
const conceptoC = require('../../db/con_costo.modelo')
const gasto = require('../../db/gasto.modelo')
const conceptoG = require('../../db/con_gasto.modelo')
const sequelize = require('../../db/conexion');

module.exports.buscarIngreso = async function (datos){

    try {
        let resultado = await sequelize.query(`SELECT SUM(cantidad) FROM ingresos WHERE DATEPART(month, fecha) = ${datos.mes} AND presupuesto_id = '${datos.id_presupuesto}';`)
        return resultado
      } catch (err) {
        throw new Error ('Ocurrio un error en la consulta del ingreso')
      }
  }

  module.exports.verIngresos = async function (id){

    try {
      //let buscarI = await ingreso.findAll({where:{presupuesto_id: id}})
      //let buscarI = await sequelize.query(`SELECT fecha,cantidad,concepto FROM ingresos p RIGHT JOIN con_ingresos pcc ON p.concepto_id = pcc.id_concepto`)
      let buscarI = await sequelize.query(`SELECT fecha,cantidad,concepto,id_ingreso FROM con_ingresos ci
      INNER JOIN ingresos i ON i.presupuesto_id = '${id}' AND i.concepto_id = ci.id_concepto`)
      return buscarI
      } catch (err) {
        throw new Error ('Ocurrio un error en la consulta del ingreso')
      }
  }
  
  
  module.exports.altaIngreso = async function (modelo){
  
    try {
      let buscarCI = await conceptoI.findOne({where:{concepto: modelo[2]}})
        if (buscarCI != null){
        let id = await conceptoI.findOne({attributes: ['id_concepto'],where:{concepto: modelo[2]}})
        await ingreso.create({fecha:modelo[0],cantidad:modelo[1],concepto_id:id.id_concepto, presupuesto_id:modelo[3]})
        return true
      }else {
        await conceptoI.create({concepto:modelo[2]})
        let id = await conceptoI.findOne({attributes: ['id_concepto'],where:{concepto: modelo[2]}})
        await ingreso.create({fecha:modelo[0],cantidad:modelo[1],concepto_id:id.id_concepto, presupuesto_id:modelo[3]})
        return true
      }
      } catch(err) {
        throw new Error('Ocurrio un error en el registro del ingreso')
      }
  }

  module.exports.borrarIngreso = async function (id){
  
    try {
      let resultado = await ingreso.destroy({where: {id_ingreso: id}});
      //let resultado = await sequelize.query(`DELETE FROM ingreso WHERE carrito.id_ingreso = '${id}'`)
      //console.log(resultado)
      return resultado
      } catch(err) {
        throw new Error('Ocurrio un error en la eliminacion del ingreso')
      }
  }

  module.exports.modificarIngreso = async function (ing){
  
    try {
      let resultado = await ingreso.update({ cantidad: ing.cantidad }, {where: {id_ingreso: ing.id_ingreso}});
        return resultado
      } catch(err) {
        throw new Error('Ocurrio un error en la modificacion del ingreso')
      }
  }

  module.exports.altaCosto = async function (modelo){
  
    try {
      let buscarCC = await conceptoC.findOne({where:{concepto: modelo[2]}})
      if (buscarCC != null){
      let id = await conceptoC.findOne({attributes: ['id_concepto'],where:{concepto: modelo[2]}})
      await costo.create({fecha:modelo[0],cantidad:modelo[1],concepto_id:id.id_concepto, presupuesto_id:modelo[3]})
      return true
      }else {
      await conceptoC.create({concepto:modelo[2]})
      let id = await conceptoC.findOne({attributes: ['id_concepto'],where:{concepto: modelo[2]}})
      await costo.create({fecha:modelo[0],cantidad:modelo[1],concepto_id:id.id_concepto, presupuesto_id:modelo[3]})
      return true
      }
      }catch(err) {
        throw new Error('Ocurrio un error en el registro del costo')
      }
  }

  module.exports.verCostos = async function (id){

    try {
      //let buscarC = await costo.findAll({where:{presupuesto_id: id}})
      let buscarC = await sequelize.query(`SELECT fecha,cantidad,concepto,id_costo
      FROM con_costos ci
      INNER JOIN costos i ON i.presupuesto_id = '${id}' AND i.concepto_id = ci.id_concepto`)
      return buscarC
      } catch (err) {
        throw new Error ('Ocurrio un error en la consulta del costo')
      }
  }

  module.exports.buscarCosto = async function (datos){

    try {
        let resultado = await sequelize.query(`SELECT SUM(cantidad) FROM costos WHERE DATEPART(month, fecha) = ${datos.mes} AND presupuesto_id = '${datos.id_presupuesto}';`)
        return resultado
      } catch (err) {
        throw new Error ('Ocurrio un error en la consulta del ingreso')
      }
  }

  module.exports.borrarCosto = async function (id){
  
    try {
        let resultado = await sequelize.query(`DELETE FROM costos WHERE costos.id_costo = '${id}'`)
        console.log(resultado)
        return resultado
      } catch(err) {
        throw new Error('Ocurrio un error en la eliminacion del ingreso')
      }
  }

  module.exports.altaGasto = async function (modelo){
  
    try {
      let buscarCG = await conceptoG.findOne({where:{concepto: modelo[2]}})
      if (buscarCG != null){
      let id = await conceptoG.findOne({attributes: ['id_concepto'],where:{concepto: modelo[2]}})
      await gasto.create({fecha:modelo[0],cantidad:modelo[1],concepto_id:id.id_concepto, presupuesto_id:modelo[3]})
      return true
      }else {
      await conceptoG.create({concepto:modelo[2]})
      let id = await conceptoG.findOne({attributes: ['id_concepto'],where:{concepto: modelo[2]}})
      await gasto.create({fecha:modelo[0],cantidad:modelo[1],concepto_id:id.id_concepto, presupuesto_id:modelo[3]})
      return true
      }
      } catch(err) {
        throw new Error('Ocurrio un error en el registro del gasto')
      }
  }

  module.exports.verGastos = async function (id){

    try {
      //let buscarG = await gasto.findAll({where:{presupuesto_id: id}})
      let buscarG = await sequelize.query(`
      SELECT fecha,cantidad,concepto,id_gasto
      FROM con_gastos ci
      INNER JOIN gastos i ON i.presupuesto_id = '${id}' AND i.concepto_id = ci.id_concepto`)
      return buscarG
      } catch (err) {
        throw new Error ('Ocurrio un error en la consulta del costo')
      }
  }

  module.exports.buscarGasto = async function (datos){

    try {
        let resultado = await sequelize.query(`SELECT SUM(cantidad) FROM gastos WHERE DATEPART(month, fecha) = ${datos.mes} AND presupuesto_id = '${datos.id_presupuesto}';`)
        return resultado
      } catch (err) {
        throw new Error ('Ocurrio un error en la consulta del ingreso')
      }
  }

  module.exports.borrarGasto = async function (id){
  
    try {
        let resultado = await sequelize.query(`DELETE FROM costos WHERE costos.id_costo = '${id}'`)
        console.log(resultado)
        return resultado
      } catch(err) {
        throw new Error('Ocurrio un error en la eliminacion del ingreso')
      }
  }


  module.exports.altaConceptoI = async function (modelo){
  
    try {
      let resultado = await conceptoI.findOne({where:{concepto: modelo[0]}})
      console.log(resultado)
      if (resultado != null){
          return false
      }else {
        await conceptoI.create({concepto:modelo[0]})
          return true
      }
      } catch(err) {
        throw new Error('Ocurrio un error en el registro del concepto')
      }
  }


  module.exports.altaConceptoC = async function (modelo){
  
    try {
      let resultado = await conceptoC.findOne({where:{concepto: modelo[0]}})
      console.log(resultado)
      if (resultado != null){
          return false
      }else {
        await conceptoC.create({concepto:modelo[0]})
          return true
      }
      } catch(err) {
        throw new Error('Ocurrio un error en el registro del concepto')
      }
  }

  module.exports.altaConceptoG = async function (modelo){
  
    try {
      let resultado = await conceptoG.findOne({where:{concepto: modelo[0]}})
      console.log(resultado)
      if (resultado != null){
          return false
      }else {
        await conceptoG.create({concepto:modelo[0]})
          return true
      }
      } catch(err) {
        throw new Error('Ocurrio un error en el registro del concepto')
      }
  }

  