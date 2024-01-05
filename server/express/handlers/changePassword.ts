import { Db } from "mongodb";
import decrypt from "../decrypt/decrypt";
import bcrypt, { compareSync } from 'bcrypt';
import crypto from 'crypto';

export default async function changePassword(db:Db, username: string, newPassword:string): Promise<boolean>{
    const users = db.collection<UserSchema>("users")
    const user  = await users.findOne({$or:[{username:username}]})
    if(!user){
        return false;
    } else{
        const decryptedPassword = decrypt(newPassword);
        const salt = 8;
            users.updateOne(
                { username: username },
                {
                    $set: {
                    password: bcrypt.hashSync(decrypt(decryptedPassword), salt),
                    changePasswordOneTimeToken: crypto.randomUUID()
                    }
                }
                )
        return true;
    }
}