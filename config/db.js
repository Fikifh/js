const env = require('./config.json');

const Sequelize = require('sequelize');
const sequelize = new Sequelize("toktok", "root", "", {
    host: "127.0.0.0",
    dialect: "mysql",
    operatorsAliases: false,
    native: true,
    logging: true,
    define: {
        freezeTableName: true
    },
    pool: {
        max: 2,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/customer')(sequelize, Sequelize);

module.exports = db;