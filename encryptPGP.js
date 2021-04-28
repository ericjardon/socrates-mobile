/* Module for the encryption of a ballot */
//const openpgp = require('openpgp');
// Use PGP with a hidden, public key of ours
// Work ONLY ON BROWSER
import * as openpgp from 'openpgp';
import { PUBKEY, PRIVKEY } from './constants/pgp'

const pubKey = PUBKEY;
const privKey = PRIVKEY;

const encrypt = {
    pubKey,
    privKey,
}

async () => {
    const publicKey = await openpgp.readKey({ armoredKey: pubKey });
    const privateKey = await openpgp.readKey({ armoredKey: privKey })

    let msg = "Hello, World!";
    console.log("Original: ", msg);

    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: msg }),
        publicKeys: publicKey,
    });
    console.log(encrypted);

    const original = await openpgp.readMessage({ armoredMessage: encrypted });

    const { data: decrypted, signatures } = await openpgp.decrypt({
        message: original,
        privateKeys: privateKey,
    });
    console.log("After decrypting...");
    console.log(decrypted);
    console.log(signatures);
    return;
};

export default encrypt;