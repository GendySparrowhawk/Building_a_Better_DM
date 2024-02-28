const Race = require('../models/Races');

const raceData = [
    {

    }

];

async function seedRaces() {
    try {
        const existingRaces = await Race.find({});

        for (const race of raceData) {
            const isExisting = existingRaces.some((existingRace) => existingRace.name === race.name);

            if (!isExisting) {
                await Race.create(race);
                console.log(`${race.name} added!`)
            } else {
                await Race.findOneAndUpdate({ name: race.name })
                console.log(`${race.name} updated!`)
            }
        }
    } catch (eer) {
        console.error("Error seeding races", err)
    }
}

module.exports = { seedRaces };