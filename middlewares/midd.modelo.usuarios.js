const Joi = require('joi')

//Exporto el modelo
module.exports = {
    modelologin : Joi.object().keys({
        usuario: Joi.string().min(6).max(16).required(), 
        pass: Joi.string().regex(/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/).min(6).required() //utilizo expresiones regulares
    }).with('usuario', 'pass'),// Si existe pass tb debe existir el usuario

    modeloAlta : Joi.object().keys({
        nombres: Joi.string().min(4).max(50),
        apellidos: Joi.string().min(6).max(50).required(),
        email: Joi.string().email().required(),
        usuario: Joi.string().min(6).max(16).required(),
        pass: Joi.string().regex(/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/).min(8).required(), //utilizo expresiones regulares
        tipo: Joi.string(),
        cumple: Joi.date()
    })
} 