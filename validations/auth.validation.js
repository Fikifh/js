const joi = require('joi');

module.exports = {
    //post customer/register
    register:{
        body:{
            email: joi.string().email().required(),
            password: joi.string().required().min(6).max(128),
        },
    },

    //post customer/login
    login:{
        body:{
            email: joi.string().email().required(),
            password: joi.string().required().min(6).max(128),
        },
    },

    //post customer/oAuth
    oAuth:{
        body:{
            acces_token:joi.string().required(),
        },
    },

};