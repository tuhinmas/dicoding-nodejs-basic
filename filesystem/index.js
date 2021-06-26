const fs = require('fs')
const path = require('path')

const fileReadCallback = (error, data) => {
    if(error){
        console.log(error)
        return;
    }
    console.log(data)
}
const fileAddress = path.resolve(__dirname, 'notes.txt')
fs.readFile(fileAddress,'utf-8',fileReadCallback)