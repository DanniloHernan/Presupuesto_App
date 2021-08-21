const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

const presupuesto = sequelize.define('presupuestos' , {
    id_presupuesto: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
    nombre_presupuesto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    proyecto_id: {
        type: DataTypes.UUID,
        references: {
          model: 'proyectos',
          key: 'id_proyecto'
        }
    },
    usuario_id: {
        type: DataTypes.UUID,
        references: {
          model: 'usuarios',
          key: 'id_usuario'
        }
    },
}, {
    timestamps: true
})

module.exports = presupuesto