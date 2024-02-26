const mongoose = require('mongoose')
const spellData = require('./spell_data')

mongoose.connect("mongodb://127.0.0.1:27017/fifth_edition");

async function seedAllData() {
    try {
        await spellData.seedSpells()
        console.log('spells seeded')
        console.log('all data seeded')
    } catch (err) {
        console.error('error seeding data:', err)
    } finally {
        mongoose.disconnect()
    }
}


seedAllData();