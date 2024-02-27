const fs = require('fs');

const imageData = fs.readFileSync('../../images/Aarakkocra2.jpg')


const base64ImageData = imageData.toString('base64');

function logIMgData() {
    console.log(base64ImageData);
}

logIMgData();

