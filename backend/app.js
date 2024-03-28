import cors from "cors";
import express from "express";
import dotenv from "dotenv"
import {dbConnection} from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js'

const app = express();

dotenv.config({ path: "./config/config.env" });

// for middleware


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your allowed origin
//     res.setHeader('Access-Control-Allow-Headers', '*'); // Optionally, allow specific headers
//     next();
//   });

// connectig backend to frontend
// app.use(cors({
//     origin: [process.env.FRONT_END],
//     methods: ["POST"],
//     credentials: true,
// }));


//app.options('*',cors());
// Handle preflight requests

  

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));


// string to json
app.use(express.json());

// encoder
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/reservation', reservationRouter);

dbConnection();

// do not call it
app.use(errorMiddleware);

export default app;

