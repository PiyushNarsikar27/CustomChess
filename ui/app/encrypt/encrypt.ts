import { AES } from 'crypto-js'

export default function encrypt(plainText:string):string{
    return AES.encrypt(plainText, "secretKey").toString();
}