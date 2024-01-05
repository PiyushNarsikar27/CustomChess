import { Db } from "mongodb";
import Mail from "nodemailer/lib/mailer";
import sendEmail from "../email/sendMail";
import bcrypt from 'bcrypt';

export default async function sendChangePasswordLink(db: Db, username: string): Promise<boolean>{
    const salt = 8;
    const users = db.collection<UserSchema>("users")
    const user  = await users.findOne({$or:[{username:username}]})
    if(!user){
        return false;
    } else{
      const emailDetails: Mail.Options = {
        from: 'communications.customchess@gmail.com',
        to: user.email,
        subject: 'Test mail',
        html: `<p>http://localhost:8000/password/change/user/${username}/${bcrypt.hashSync(user.changePasswordOneTimeToken, salt)}</p>`
      }
        //This should be link to frontend reset password page and frontend should display form based on api response allow or not
      return sendEmail(emailDetails);
    }
}