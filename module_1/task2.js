const fs = require('fs');
const csv = require('csvtojson');

const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const txtFilePath = './output/nodejs-hw1-ex1.txt';

const errorHandler = (error, source) => {
    console.log(`***** Error during ${source} *****`);
    console.log(error);
};

const readStream = fs.createReadStream(csvFilePath)
.on('error', (e) => errorHandler(e, 'file reading'));

const writeStream = fs.createWriteStream(txtFilePath)
.on('error', (e) => errorHandler(e, 'file writing'));


readStream.pipe(csv()).pipe(writeStream);
