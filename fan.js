const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');

// TODO - define the Musician model
 const Fan = db.define('Fan',{
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    Age: {
        type: DataTypes.INTEGER
    }
 })

module.exports = {
    Fan
};