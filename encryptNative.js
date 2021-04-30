const RN = require('react-native-rsa-native');

console.log(RN.RSA);

let message = "HOLA HELLO WORLD ERIC";

function encrypt(){

    RSA.generateKeys(4096) // set key size
    .then(keys => {
        console.log('4096 private:', keys.private); // the private key
        console.log('4096 public:', keys.public); // the public key
        RSA.encrypt(message, keys.public)
        .then(encodedMessage => {
            console.log(`the encoded message is ${encodedMessage}`);
            RSA.decrypt(encodedMessage, keys.private)
            .then(decryptedMessage => {
                console.log(`The original message was ${decryptedMessage}`);
            });
        });
    });
} 


export default encrypt;