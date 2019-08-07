const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
   return Joi.validate(data, schema);

};

const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
   return Joi.validate(data, schema);

};

const folderValidation = (data) => {
    const schema = {
        name: Joi.string().max(50).required(),
        user:Joi.string().max(255).required()
    };
   return Joi.validate(data, schema);

};

const binderValidation = (data) => {
    const schema = {
        name: Joi.string().max(50).required(),
        description: Joi.string().max(255),
        folder:Joi.string().max(50).required()
    };
   return Joi.validate(data, schema);

};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

module.exports.folderValidation = folderValidation;
module.exports.binderValidation = binderValidation;
