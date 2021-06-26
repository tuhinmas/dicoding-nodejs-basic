const fs = require('fs');

const readableStream = fs.createReadStream('./readable_stream/article.txt',{
    highWaterMark: 10 //default 16384 in bytes
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`)
    } catch (error) {
        console.log(error)
    }
});

readableStream.on('end', () => {
    console.log('Done')
});