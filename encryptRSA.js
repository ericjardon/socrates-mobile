const RSAKey = require('react-native-rsa');
const { PUB_KEY, PRIV_KEY } = require('./constants/rsa');
const bits = 1024;
const exponent = '1001';


// GENERATION OF KEYS
/* let rsa = new RSAKey();
let r = rsa.generate(bits, exponent);

let publicKey = rsa.getPublicString();
console.log(publicKey);
let privateKey = rsa.getPrivateString();
console.log(privateKey); */

// ENCRYPTING
const encrypt = (plainText) => {
    console.log("Plaintext to encrypt:", plainText);
    var rsa = new RSAKey();
    rsa.setPublicString(PUB_KEY);
    let encrypted = rsa.encrypt(plainText);
    console.log("Encrypting...");
    console.log(encrypted);
}


// DECRYPTING
/* rsa_enc.setPrivateString(PRIV_KEY);
let decrypted = rsa_enc.decrypt(encrypted);
console.log("Decrypting...")
console.log(decrypted); */


module.exports = encrypt;

/* var RSAKey = require('react-native-rsa');
const bits = 1024;
const exponent = '10001'; // must be a string. This is hex string. decimal = 65537
var rsa = new RSAKey();
rsa.generate(bits, exponent);
var publicKey = rsa.getPublicString(); // return json encoded string
var privateKey = rsa.getPrivateString(); // return json encoded string

console.log("Encrypting....")


var rsa_ = new RSAKey();
rsa_.setPublicString(publicKey);
var originText = 'sample String Value';
var encrypted = rsa_.encrypt(originText);
console.log(encrypted)

console.log("Decrypting....")

rsa_.setPrivateString(privateKey);
var decrypted = rsa_.decrypt(encrypted); // decrypted == originText
console.log(decrypted); */