// module.exports = require('./src/encryptor');
// const filename = process.argv[3];
// const pass = process.argv[4];
// const pass = process.argv[4];
// const Encrypt =  require('./encrypt');
// const Decrypt =  require('./decrypt');
'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const common = require('./constant');

class Index {

  constructor(operation, file, secretPassword){
    this.process(operation, file, secretPassword);
  }

  process(operation, file, secretPassword) {
    switch(operation){
      case 'decrypt':
      case 'encrypt':
        let Operator =  require('./' + operation);
        return new Operator()[operation + 'File'](file, secretPassword);
    }
  }

}

module.exports = Index;

