import jwt, { JwtPayload } from "jsonwebtoken"

export default function(token:string):string|JwtPayload{
    return jwt.verify(token, "secretKey")
}