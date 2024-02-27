const fs = require('fs')

const imagepPath = 'C:/Users/jacob/bootcamp/projects/Better_DM/Building_a_Better_DM/assets/images/Aarakocra2.jpg'

function logIMgData() {
    const imageData = fs.readFileSync(imagepPath)
    const base64 = Buffer.from(imageData).toString('base64')
    console.log(base64)
}



logIMgData();

