const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

const ingreso = sequelize.define('ingresos' , {
    id_ingreso: {
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
          model: 'con_ingresos',
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

module.exports = ingreso