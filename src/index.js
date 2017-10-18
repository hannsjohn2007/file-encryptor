'use strict';

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
      default:
        console.log('Operation not supported!');
    }
  }

}

module.exports = Index;

