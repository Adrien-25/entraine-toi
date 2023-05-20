import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./db.js";
import authRoutes from './routes/authRoute.js';
import cors from "cors";
// import path from 'path';

// CONFIGURE ENV
dotenv.config();

// DATABSE CONFIG
connectDB();

// REST OBJECT
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.use("/auth", authRoutes);

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// PORT
const PORT = process.env.PORT || 5000;

// RUN LISTEN
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})