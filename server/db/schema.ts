type GameSchema = {
    moves: Move[];
}

type Move = {
    initialPosition: Position;
    finalPosition: Position;
}

type Position = {
    x:string;
    y:string;
}

type UserSchema = {
    customerHash:string;
    username:string;
    password:string;
    email:string;
    emailVerified:boolean;
    emailVerificationToken:string;
    changePasswordOneTimeToken:string;
}