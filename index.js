const {Band} = require('./Band')
const { Fan } = require('./fan')
const {Musician} = require('./Musician')

Musician.belongsTo( Band, { as: 'Member' })
Band.hasMany(Musician, {foreignKey: 'MemberName'})

Fan.belongsToMany( Band, {through: 'Devotion', as: 'fan' })
Band.belongsToMany(Fan , {through: 'Devotion'})


module.exports = {
    Band,
    Musician,
    Fan
};
