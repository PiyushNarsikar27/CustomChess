import { Db, UUID } from "mongodb";
import bcrypt from 'bcrypt'
import SignUpRequest from "../request-models/SignUpRequest";
import decrypt from "../decrypt/decrypt";
import crypto from 'crypto';

export default async function createUser(db:Db, requestBody: SignUpRequest, emailVerificationToken: string){
    const {username, password, email} = requestBody
    const users = db.collection<UserSchema>("users")
    const salt = 8;
    const newUser = {
        username:username,
        email:email,
    }
    const customerHash = bcrypt.hashSync(JSON.stringify(newUser), salt)
    await users.insertOne({
        ...{...newUser, 
            password: bcrypt.hashSync(decrypt(password), salt),
            emailVerified: false, emailVerificationToken: emailVerificationToken,
        changePasswordOneTimeToken: (crypto.randomUUID()+'0')}, customerHash:customerHash
    });
}