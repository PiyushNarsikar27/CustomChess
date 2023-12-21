import express, { Express, Request, Response } from 'express';
import DatabaseConnection from '../db/dbconnection';
import getGameFromGameId from './handlers/getGameFromGameId';
import cors from 'cors'

const startServer = async () => {
  const app: Express = express();
  const port = 8000;
  const dbConnection = new DatabaseConnection();
  const db = await dbConnection.getDB();
  const corsOptions = {
    origin:["http://localhost:3000"]
  }

  app.get('/healthcheck', cors(corsOptions), (_: Request, res: Response) => {
    res.send("Server process started successfully");
  });

  app.get('/game/:gameId', cors(corsOptions), async (req: Request, res: Response) => {
    const gameId:string = req.params.gameId
    const response = await getGameFromGameId(gameId, db)
    res.send(response);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});
