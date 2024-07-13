'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidate.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    callAvailability: DataTypes.STRING,
    linkedinUrl: DataTypes.STRING,
    githubUrl: DataTypes.STRING,
    freeTextComment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};