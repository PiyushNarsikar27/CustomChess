import { compareSync } from "bcrypt";
import { Db } from "mongodb";
import jwt from "jsonwebtoken"
import LoginResponse from "../response-models/LoginResponse";
import decrypt from "../decrypt/decrypt";

export default async function authenticateUser(db:Db, usernameOrEmail:string, password:string): Promise<LoginResponse>{
    const users = db.collection<UserSchema>("users")
    const user  = await users.findOne({$or:[{username:usernameOrEmail}, {email:usernameOrEmail}]})
    let token:string = ""
    if(user && compareSync(decrypt(password), user.password)){
        token = jwt.sign({customerHash:user.customerHash},
            "secretKey",
            {
              algorithm: 'HS256',
              allowInsecureKeySizes: true,
              expiresIn: 86400,
            })
    }
    return {token:token};
}