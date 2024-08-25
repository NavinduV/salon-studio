import express from "express";
import { config } from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middleware/error.js';
import userRouter from './router/userRouter.js';

const app = express();
config({ path: './config/config.env' });

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    method: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

app.use('/api', userRouter);

dbConnection();

export default app;