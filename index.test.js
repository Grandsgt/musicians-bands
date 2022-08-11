const {db} = require('./db');
const {Band, Musician, Fan} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({
            name: 'Queen',
            genre: 'Rock'
        })
        const { name, genre } = testBand;
        expect({ name, genre }).toMatchObject({
            name: 'Queen',
            genre: 'Rock'
        });
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: 'Freddy Mercury',
            instrument: 'Vocalist'
        });
        const { name, instrument } = testMusician;
        expect({ name, instrument }).toMatchObject({
            name: 'Freddy Mercury',
            instrument: 'Vocalist'
        });
    })
    test('assign Musician as a member of a band', async () => {
        // TODO - test creating a musician
        const testMusician2 = await Musician.create({
            name: 'Anakin',
            instrument: 'Force'
        })
        const testMusician = await Musician.create({
            name: 'Jango',
            instrument: 'Blaster'
        });
        const testBand = await Band.create({
            name: 'Mandalorian',
            genre: 'Bounty Hunter'
        });
         await testBand.addMusician(testMusician2);
         await testBand.addMusician(testMusician);
         const assignTest = await Musician.findAll({where: {
            MemberName: 'Mandalorian'
        }})
        expect(assignTest[0].MemberName).toEqual('Mandalorian')
         
        
    })
    test ('Make a fan', async () => {
        const testFan = await Fan.create({
            name: 'Boba',
            Age: 6
        })
        const { name, Age } = testFan
        expect({ name, Age }).toMatchObject({
            name: 'Boba',
            Age: 6
        })
    })
    test ('Add Fan to Band', async () => {
        const testFan = await Fan.create({
            name: 'Yoda',
            Age: 999
        })
        const assignedBand = await Band.findOne({ where: {
            name: 'Mandalorian'
        }})
        await assignedBand.addFan(testFan)
        const devTest = await Band.findAll({include: {
            model: Fan,
           // as: 'Fans',
            required: true,
            //where: {
             //   name: 'Yoda'
           // }
        }});
        console.log(devTest)
        expect(devTest[0].name).toBe('Mandalorian')
    })
})