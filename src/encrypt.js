'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const common = require('./constant');

class Encryptor {

  encryptFile(filepath, secretPass=''){
    if(fs.lstatSync(filepath).isFile()){
      console.log('Encrypting');
      return fs.createReadStream(filepath)
        .on('data', () => console.log('.'))
        .pipe(crypto.createCipher(common.ALGORITHMS, secretPass))
        .pipe(fs.createWriteStream(path.join(filepath + common.FILE_EXTENSION))).on('finish', () => console.log('Done'));
    }
  }
}

module.exports = Encryptor;
    