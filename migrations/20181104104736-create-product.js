'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      REPAIR_SERVICE_ID: {
        type: Sequelize.INTEGER
      },
      BUILDING_MATERIA_ID:{
        type: Sequelize.INTEGER
      },
      AUCTION_ID:{
        type: Sequelize.INTEGER
      },
      REPAIR_SERVICER_ID:{
        type: Sequelize.INTEGER
      },
      PRODUCT_NAME:{
        type: Sequelize.STRING
      },
      PICTURE:{
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
    return queryInterface.dropTable('Products');
  }
};