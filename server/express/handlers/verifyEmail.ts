import { Db } from "mongodb"

export default async function verifyEmail(db:Db, username:string, emailVerificationToken:string): Promise<boolean>{
    const users = db.collection<UserSchema>("users")
    const user  = await users.findOne({$or:[{username:username}]})
    if(!user){
        return false;
    } else{
        if(user.emailVerificationToken==emailVerificationToken){
            if(!user.emailVerified){
                users.updateOne(
                    { username: username },
                    {
                      $set: {
                        emailVerified:true
                      }
                    }
                 )
            } 
            return true;
        }
        return false;
    }
}