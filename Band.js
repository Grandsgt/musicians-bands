const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');

// TODO - define the Band model
const Band = db.define('Band',{
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    genre: {
        type: DataTypes.STRING
    }
 })

module.exports = {
    Band
};