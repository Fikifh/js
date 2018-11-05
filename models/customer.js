'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    PRODUCT_ID: DataTypes.INTEGER,
    USERNAME:DataTypes.STRING,
    EMAIL:DataTypes.STRING,
    NAME:DataTypes.STRING,
    BIRTH:DataTypes.DATE,
    GENDER:DataTypes.STRING,
    PASSWORD:DataTypes.STRING,
    ADDRESS:DataTypes.TEXT,
    CUSTOMER_AVATAR:DataTypes.BLOB
  }, {});
  Customer.associate = function(models) {
    Customer.belongsTo(models.Product,{
      foreignKey:'PRODUCT_ID',
      onDelete:'CASCADE'
    });
  };
  return Customer;
};