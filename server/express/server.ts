import express, { Express, NextFunction, Request, Response } from 'express';
import DatabaseConnection from '../db/dbconnection';
import getGameFromGameId from './handlers/getGameFromGameId';
import cors from 'cors'
import verifyValidSignUp from './handlers/verifyValidSignUp';
import bodyParser from 'body-parser';
import createUser from './handlers/createUser';
import authenticateUser from './handlers/authenticateUser';
import testVerifyToken from './testVerifyToken';
import LoginRequest from './request-models/LoginRequest';
import SignUpRequest from './request-models/SignUpRequest';
import sendEmail from './email/sendMail';
import Mail from 'nodemailer/lib/mailer';
import crypto from 'crypto';
import verifyEmail from './handlers/verifyEmail';
import changePassword from './handlers/changePassword';
import sendChangePasswordLink from './handlers/sendChangePasswordLink';
import allowPasswordChange from './handlers/allowPasswordChange';

const startServer = async () => {
  const app = express();
  const port = 8000;
  const dbConnection = new DatabaseConnection();
  const db = await dbConnection.getDB().catch((error: Error)=>{
    console.error(`DB connection failed: ${error.message}`);
    throw new Error(`DB connection failed: ${error.message}`);
  });
  const corsOptions = {
    origin:["http://localhost:3000"],
  };
  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  app.get('/healthcheck', (_: Request, res: Response) => {
    res.send("Server process started successfully");
  });

  app.get('/game/:gameId', async (req: Request, res: Response, next: NextFunction) => {
    const gameId:string = req.params.gameId;
    getGameFromGameId(gameId, db).then((response)=>{res.send(response);}).catch((error:Error)=>{
      next(error);
    });
  });

  app.post('/auth/login', async (req: Request, res: Response, next: NextFunction) => {
    const requestBody:LoginRequest = req.body;
    if(!requestBody.usernameOrEmail || !requestBody.password){
      res.status(400).send("All mandatory parameters (usernameOrEmail and password) are not passed in the request body");
    }
    const response = await authenticateUser(db, requestBody.usernameOrEmail, requestBody.password).catch((error:Error)=>{
      next(error);
    });;
    res.send(response);
  });

  app.post('/auth/signup', async (req: Request, res: Response, next: NextFunction) => {
    const requestBody: SignUpRequest = req.body;
    if(!requestBody.username || !requestBody.email || !requestBody.password){
      res.status(400).send("All mandatory parameters (username, email and password) are not passed in the request body");
    }
    let errorEncountered: boolean = false;
    const newUser = await verifyValidSignUp(db, requestBody.username, requestBody.email).catch((error:Error)=>{
      errorEncountered=true;
      next(error);
    });
    if(newUser){
      const emailVerificationToken = crypto.randomUUID();
      await createUser(db, requestBody, emailVerificationToken);
      res.status(201).send("Sign up successful!");
      const emailDetails: Mail.Options = {
        from: 'communications.customchess@gmail.com',
        to: requestBody.email,
        subject: 'Test mail',
        html: `<p>http://localhost:3000/email-verification/${requestBody.username}/${emailVerificationToken}</p>`
        //This should be link to frontend verify page and frontend should send request to /email/verify
      };
      sendEmail(emailDetails);
    }
    else if(!errorEncountered){
      res.send("Sign up failed, the username or email is already taken!");
    }
  });

  app.get('/email/verify/user/:username/:emailVerificationToken', async (req: Request, res: Response, next: NextFunction) => {
    const username:string = req.params.username;
    const emailVerificationToken:string = req.params.emailVerificationToken;
    verifyEmail(db, username, emailVerificationToken).then((verifiedOrNot: boolean)=>{
      if(verifiedOrNot){
        res.send("Email verified successfully");
      } else{
        res.status(404).send("The provided username or verification token is wrong");
      }
    }).catch((error:Error)=>{
      next(error);
    });
  });

  app.get('/password/change/user/:username/:hashedChangePassswordOneTimeToken', async (req: Request, res: Response, next: NextFunction)=>{
    const username: string = req.params.username;
    const hashedChangePassswordOneTimeToken:string = req.params.hashedChangePassswordOneTimeToken;
    let errorEncountered:boolean = false;
    const resetAllowed = await allowPasswordChange(db, username, hashedChangePassswordOneTimeToken).catch((error:Error)=>{
      errorEncountered=true;
      console.log("error"+error.message);
      next(error);
    });
    if(resetAllowed){
      res.send("Resetting the password is allowed")
    }
    else if(!errorEncountered){
      res.status(404).send("The provided username or token is wrong/expired");
    }
  }
  );

  app.get('/password/change/send-reset-link/user/:username', async (req: Request, res: Response, next: NextFunction) => {
    const username: string = req.params.username;
    let errorEncountered: boolean = false;
    const resetLinkSent = await sendChangePasswordLink(db, username).catch((error:Error)=>{
      errorEncountered=true;
      next(error);
    });
    if(resetLinkSent){
      res.send("Reset link sent to the email of the user")
    }
    else if(!errorEncountered){
      res.status(404).send("The provided username does not exist");
    }
  });

  app.post('/password/change', async (req: Request, res: Response, next: NextFunction) => {
    const requestBody:ChangePasswordRequest = req.body;
    if(!requestBody.username || !requestBody.encryptedNewPassword){
      res.status(400).send("All mandatory parameters (username and encryptedNewPassword) are not passed in the request body");
    }
    let errorEncountered: boolean = false;
    const passwordChanged = await changePassword(db, requestBody.username, requestBody.encryptedNewPassword).catch((error:Error)=>{
      errorEncountered=true;
      next(error);
    });;
    if(passwordChanged){
      res.send("Password successfully reset")
    }
    else if(!errorEncountered){
      res.status(400).send("The provided username does not exist");
    }
  });

  app.get('/tokenTest', (req: Request, res: Response) => {
    const bearerHeader:string = req.headers.authorization
    const token = bearerHeader.split(' ')[1];
    const response = testVerifyToken(token)
    res.send(response);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  app.use((err: Error, _: Request, res: Response, next:NextFunction)=>{
    res.status(500).send("Something went wrong");
    console.error(`Error: ${err.message}`);
  })
};

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});
