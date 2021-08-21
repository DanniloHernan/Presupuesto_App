const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const sequelize = require('./db/conexion')
const midd = require ('./middlewares/usuario.midd')

const Usuarios = require('./db/clientes.modelo')
const Proyectos = require('./db/proyecto.modelo')
const Presupuestos = require('./db/presupuesto.modelo')
const Ingresos = require('./db/ingreso.modelo')
const ConceptoI = require('./db/con_ingreso.modelo')
const Costo = require('./db/costo.modelo')
const ConceptoC = require('./db/con_costo.modelo')
const Gasto = require('./db/gasto.modelo')
const ConceptoG = require('./db/con_gasto.modelo')

const DatosRoutes = require('./app/vista/vista.datos')
const ClientesRoutes = require('./app/vista/vista.cliente')
const PresupuestosRoutes = require('./app/vista/vista.presupuestos')


//configuramos nuestro servidor
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())
app.use(midd.limiter)


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

async function iniciarServidor() {
    try {
      
      //await Usuarios.sync({alter:true})
      //await Proyectos.sync({alter:true})
      //await Presupuestos.sync({alter:true})
      //await Ingresos.sync({alter:true})
      //await ConceptoI.sync({alter:true})
      //await Costo.sync({alter:true})
      //await ConceptoC.sync({alter:true})
      //await Gasto.sync({alter:true})
      //await ConceptoG.sync({alter:true})

      await sequelize.authenticate();
      console.log('Conexión establecida correctamente');
      app.listen(process.env.PORT, ()=> {
        console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
      })
    } catch (err) {
      console.error('No se pudo conectar con la Base de datos: ', err)
    }
  }
  

iniciarServidor()

DatosRoutes(app)
ClientesRoutes(app)
PresupuestosRoutes(app)

