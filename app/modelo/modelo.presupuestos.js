const Proyectos = require('../../db/proyecto.modelo')
const Presupuesto = require('../../db/presupuesto.modelo')
const sequelize = require('../../db/conexion');


//Catalogo
module.exports.verProyectos = async function (){

    try {
      let resultado = await Proyectos.findAll()
      console.log(resultado)
      return resultado
      } catch (err) {
        throw new Error ('Ocurrio un error en la consulta de los proyectos')
      }
    return resultado
}

module.exports.altaProyecto = async function (proyecto){

  try {
    let resultado = await Proyectos.findOne({where:{nombre: proyecto[0],version:proyecto[1]}})
    console.log(resultado)
    if (resultado != null){
        return false   
      }else {
        await Proyectos.create({nombre:proyecto[0], version:proyecto[1],fecha:proyecto[2]})
        return true
      }
    } catch(err) {
      throw new Error('Ocurrio un error en la conexion con la base de datos')
    }
}

module.exports.altaPresupuesto = async function (pres){

    try {
      let resultado = await Presupuesto.findOne({where:{nombre_presupuesto: pres[0],proyecto_id:pres[1],usuario_id:pres[2]}})
      if (resultado != null){
        return false   
      }else {
        await Presupuesto.create({nombre_presupuesto:pres[0],proyecto_id:pres[1],usuario_id:pres[2]})
        return true
      }
      } catch(err) {
        console.log(err)
        throw new Error('Ocurrio un error en el registro del presupuesto')
      }
}

module.exports.traerPresupuesto = async function (id) {
  try {
    let resultado =  await Presupuesto.findOne({where: {proyecto_id: id}})
    console.log(resultado)
    //let resultado = await sequelize.query(`SELECT * FROM dbo.presupuestos WHERE presupuestos.id = '${id}'`);
    return resultado
      } catch(err) {
          console.log(err)
          throw new Error('Ocurrio un error en la creación del producto')
      }
}

module.exports.borrarPresupuesto = async function (id){

    let resultado = await Presupuesto.destroy({where: {id_presupuesto: id}});
    return resultado
}

/* module.exports.modificaproducto = async function (data) {

    let resultado = await productos.findByIdAndUpdate(data.id , {$set:{vendedor: data.vendedor}})
    return resultado   
}  */

