const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

const proyecto = sequelize.define('proyectos' , {
    id_proyecto: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    version: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    timestamps: true
})

module.exports = proyecto