'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingresso extends Model {
    static associate(models) {
      this.belongsTo(models.Evento, {
        as:'evento',
        foreignKey:'eventoId'
      })

      this.belongsTo(models.Participante, {
        as:'participante',
        foreignKey:'participanteId'
      })
    }
  }
  Ingresso.init({
    eventoId: DataTypes.INTEGER,
    participanteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingresso',
    tableName: 'ingresso'
  });
  return Ingresso;
};