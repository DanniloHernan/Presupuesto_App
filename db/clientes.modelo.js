const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

const Usuarios = sequelize.define('usuarios' , {
    id_usuario: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
    nombres : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    pass : {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    tipo : {
        type: DataTypes.STRING(15),
        allowNull: true
    },
}, {
    timestamps: true
})

module.exports = Usuarios