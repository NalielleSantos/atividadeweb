'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      this.hasMany(models.Ingresso, {
        as:'ingresso',
        foreignKey:'eventoId'
      })
    }
  }
  Evento.init({
    nome: DataTypes.STRING,
    data: DataTypes.DATE,
    local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evento',
    tableName: 'evento'
  });
  return Evento;
};