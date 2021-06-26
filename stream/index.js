/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs')
const readableStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark:15
});

const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('readable', () => {
    try {
        // process.stdout.write(`[${readableStream.read()}]`)
        let a = readableStream.read()
        if(a){
            writableStream.write(a + "\n")
        }
        console.log(a)
        // writableStream.end();
    } catch (error) {
        console.log(error)
    }
})

readableStream.on('end', () => {
    console.log('Done')
});
