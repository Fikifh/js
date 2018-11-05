'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PRODUCT_ID: {
        type: Sequelize.INTEGER
      },
      USERNAME:{
      type: Sequelize.STRING
      },
      EMAIL:{
      type: Sequelize.STRING
      },
      NAME:{
      type: Sequelize.STRING
      },
      BIRTH:{
      type: Sequelize.DATE
      },
      GENDER:{
      type: Sequelize.STRING
      },
      PASSWORD:{
      type: Sequelize.STRING
      },
      ADDRESS:{
      type: Sequelize.TEXT
      },
      CUSTOMER_AVATAR:{
      type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};