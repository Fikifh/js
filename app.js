Promise = require('bluebird');
const { port, env } = require('./config/variables');
const app = require('./config/express');

//models
var models = require("./models");
//sync database
models.sequelize.sync().then(function() {
    console.log('database synced');
}).catch(function(err){
    console.log(err, "something went wrong with the database !");
});


//listen to requests
//app.listen(port, ()=>console.info(`Server Started on port ${port} (${env})`));


module.exports = app;