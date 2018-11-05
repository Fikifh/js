'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    REPAIR_SERVICE_ID: DataTypes.INTEGER,
    BUILDING_MATERIA_ID:DataTypes.INTEGER,
    AUCTION_ID:DataTypes.INTEGER,
    REPAIR_SERVICER_ID:DataTypes.INTEGER,
    PRODUCT_NAME:DataTypes.STRING,
    PICTURE:DataTypes.BLOB
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.Customer, {
      foreignKey:'PRODUCT_ID',
      as:'customers',
    });
  };
  return Product;
};