import { Db } from "mongodb";

export default async function verifyValidSignUp(db:Db, username:string, email:string):Promise<boolean>{
    const users = db.collection<UserSchema>("users")
    const user  = await users.findOne({$or:[{username:username}, {email:email}]})
    return (!user)
}
