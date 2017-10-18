# file-encryptor
To run the code using CLI. 

Encrypt

    $node app.js encrypt <filename> <secret pass>
Decrypt

    $node app.js decrypt <encrypted filename> <secret pass>

to use the module in JavaScript Code.

    let Encryptor = require('file-encryptor');
    // let encryptor = new Encryptor(Operation, Filename, Password);
    // Operation = encrypt/decrypt
    let encryptor = new Encryptor('encrypt', 'sample.txt', 'mySecretPassword'); // this will generate sample.txt.encrypt file as the encrypted data

You can also do this

    encryptor.process('encrypt', 'sample.txt', 'mySecretPassword'); 
    
    