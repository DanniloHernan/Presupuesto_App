const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

const gasto = sequelize.define('gastos' , {
    id_gasto: {
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
          model: 'con_gastos',
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

module.exports = gasto