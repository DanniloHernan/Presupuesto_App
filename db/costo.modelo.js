const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

const costo = sequelize.define('costos' , {
    id_costo: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    concepto_id: {
        type: DataTypes.UUID,
        references: {
          model: 'con_costos',
          key: 'id_concepto'
        }
    },
    presupuesto_id: {
        type: DataTypes.UUID,
        references: {
          model: 'presupuestos',
          key: 'id_presupuesto'
        }
    },
}, {
    timestamps: true
})

module.exports = costo