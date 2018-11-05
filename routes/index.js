const express = require('express');
const customer = require('./customer');
const product = require('./product');


const router = express.Router();

router.use('/customer', customer);
//router.use('/product', product);



// module.exports = (app)=>{
//     app.get('/api', (req, res) => res.status(200).send({
//         message:'welcome to resful api',
//     }));
//     //app.post('/api/company', companyController.create);
// };
module.exports= router;