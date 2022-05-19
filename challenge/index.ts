const csv = require('csv-parser');
const fs = require('fs');

const grava = (data: any) => {
  const arr = JSON.stringify(data);
  
  fs.writeFile('./challenge/output.json', arr, (err: string) => {
    if (err) throw err;
    console.log(`Arquivo output.json criado!`);
  });
}

const result: string[] = [];

const readCsv = (file: string) => {
  fs.createReadStream(file)
  .pipe(csv({}))
  .on('data', (data: any) => result.push(data))
  .on('end', () => grava(result));
};

readCsv('./challenge/input.csv');
