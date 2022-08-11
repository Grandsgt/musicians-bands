const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');

// TODO - define the Musician model
 const Musician = db.define('Musician',{
    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    }
 })

module.exports = {
    Musician
};