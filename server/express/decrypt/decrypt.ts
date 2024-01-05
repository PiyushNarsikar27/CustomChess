import { AES } from 'crypto-js';

export default function decrypt(encryptedValueBase64:string):string{
    return AES.decrypt(encryptedValueBase64, "secretKey").toString();
}