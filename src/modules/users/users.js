const Joi = require('joi');

const UserSchema = Joi.object().keys({
    name: Joi.string().min(3).max(50).lowercase.require(),
    password: Joi.string().min(8).max(30).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required()
})

module.exports = UserSchema;