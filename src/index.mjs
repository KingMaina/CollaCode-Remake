import * as dotenv from 'dotenv'
dotenv.config()
import { dbConnect } from './Utils/db.mjs';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

// Import routes
import v1TaskRoutes from './v1/Routes/taskRoutes.mjs';
import v1UserRoutes from './v1/Routes/userRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 5000;

// Register middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Register routes
app.use('/api/v1/tasks', v1TaskRoutes);
app.use('/api/v1/users', v1UserRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});

// Connect to database
async function connectToDB() {
  try {
    await dbConnect();
  } catch (error) {
    console.error(`Error occurred connecting to db !: ${error}`);
  }
}; connectToDB()
