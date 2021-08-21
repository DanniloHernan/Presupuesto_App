const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

const conceptoI = sequelize.define('con_ingresos' , {
    id_concepto: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
    concepto : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    timestamps: true
})

module.exports = conceptoI