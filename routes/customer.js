const express = require('express');
const validate = require('express-validator');
const controller = require('../controllers/customerController');
const oAuthLogin = require('../middlewares/auth').oAuth;
const {login, register, oAuth} = require('../validations/auth.validation');

const router = express.Router();

router
    .route('/register')
        .post(validate(register), controller.register)
        .get((req, res)=>{
            res.json({'message':'bagus'})
        });

router
    .route('/getcustomer')
        .get(controller.getCustomer);


module.exports = router;