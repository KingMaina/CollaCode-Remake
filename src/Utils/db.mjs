import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
const DB_URI = process.env.DB_URI;

/**
 * Establish connection with database
 * @param {String} url - connection url of the database
 * @param options - additional options to be passed e.g.'{ family: 4 }'
 * @returns {Boolean} Bolean
 */
export const dbConnect = async (url = DB_URI, options = {}) => {
  try {
    mongoose.connect(url, { ...options, useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error(`Error connecting to database: ${error}`);
        return false;
      });
    const dbConnection = mongoose.connection;
    dbConnection.on('connected', stream => {
      console.log("Database connection established");
    });
    dbConnection.on('error', (error) => {
      console.error(`Error connecting: ${error}`);
    });
    return true;
  } catch (error) {
    console.error(`Could not establish database connection... ${error}`);
    return false;
  }
}