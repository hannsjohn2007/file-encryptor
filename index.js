
const operation = process.argv[2];
const file = process.argv[3];
const password = process.argv[4];
const index =  require('./src/index');

new index(operation, file, password);
