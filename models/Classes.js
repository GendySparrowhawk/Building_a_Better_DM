const {Schema, model} = require('mongoose');


const subclassSchema = new Schema ({
abliity: [
    {
        name: String,
        description: String,
    }
]

})
const classLevelSchema = new Schema({

})

const classSchema = new Schema ({

})

const Class = model("class", classSchema)

module.exports = Class;