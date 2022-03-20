'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PositionName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PositionName.init({
    PositionCode: DataTypes.STRING,
    PositionName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PositionName',
  });
  return PositionName;
};