'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    
    static associate(models) {
      
    }
  }
  Candidate.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
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