"use strict";
const csv = require('csv-parser');
const fs = require('fs');
const grava = (data) => {
    const arr = JSON.stringify(data);
    fs.writeFile('./challenge/output.json', arr, (err) => {
        if (err)
            throw err;
        console.log(`Arquivo output.json criado!`);
    });
};
const result = [];
const readCsv = (file) => {
    fs.createReadStream(file)
        .pipe(csv({}))
        .on('data', (data) => result.push(data))
        .on('end', () => grava(result));
};
readCsv('./challenge/input.csv');
