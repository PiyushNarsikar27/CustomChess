import { Db } from "mongodb";
import Mail from "nodemailer/lib/mailer";
import sendEmail from "../email/sendMail";
import bcrypt, { compareSync } from 'bcrypt';

export default async function allowPasswordChange(db: Db, username: string, hashedChangePassswordOneTimeToken:string): Promise<boolean>{
    const users = db.collection<UserSchema>("users")
    const user  = await users.findOne({$or:[{username:username}]})
    return !(!user || !compareSync(user.changePasswordOneTimeToken, hashedChangePassswordOneTimeToken))
}