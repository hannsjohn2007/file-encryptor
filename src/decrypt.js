'use strict';
const crypto = require('crypto');
const fs = require('fs');
const common = require('./constant');

class Decryptor {

  decryptFile(filepath, secretPass=''){
    if(fs.lstatSync(filepath).isFile() && filepath.endsWith(common.FILE_EXTENSION)){
      let arr = filepath.split('.');
      arr.pop();
      console.log('Decrypting');
      return fs.createReadStream(filepath)
        .on('data', () => console.log('.'))
        .pipe(crypto.createDecipher(common.ALGORITHMS, secretPass))
        .on('error', () => console.log('Invalid secret password'))
        .pipe(fs.createWriteStream(arr.join('.')))
        .on('finish', () => console.log('Done'));
    }
  }
}

module.exports = Decryptor;
    