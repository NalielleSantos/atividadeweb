'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participante extends Model {
    static associate(models) {
      this.hasMany(models.Ingresso, {
        as:'ingresso',
        foreignKey:'participanteId'
      })
    }
  }
  Participante.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Participante',
    tableName: 'participante'
  });
  return Participante;
};