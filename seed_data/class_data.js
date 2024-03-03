const Class = require("../models/Classes");

const dndClassData = [

]
async function seedClasses() {
  try {
    const existingdndClasses = await Class.find({});

    for (const dndClass of dndClassData) {
      const isExisting = existingdndClasses.some(
        (existingdndClass) => existingdndClass.name === dndClass.name
      );
      if (!isExisting) {
        await Class.create(dndClass);
        console.log(`${dndClass.name} added!`);
      } else {
        await Class.findOneAndUpdate({ name: dndClass.name }, dndClass);
        console.log(`${dndClass.name} updated!`);
      }
    }
  } catch (err) {
    console.error("Error seeding Classes", err);
  }
}

module.exports = { seedClasses };
