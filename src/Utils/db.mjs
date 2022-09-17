import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
const DB_URI = process.env.DB_URI;

/**
 * Establish connection with database
 * @param {String} url - connection url of the database
 * @param options - additional options to be passed e.g.'{ family: 4 }'
 * @returns true if connection successful
 */
export const dbConnect = async(url = DB_URI, options = {}) => {
  try{
    mongoose.connect(url, {...options,  useNewUrlParser: true, useUnifiedTopology: true, family: 4})
    .then(() =>{
      return;
    })
    .catch((error) => {
      console.error(`Error connecting to database: ${error}`);
    });

    const dbConnection = mongoose.connection;
    dbConnection.on('connected', stream => {
      console.log("Connection established");
    });
    dbConnection.on('error',(error) => {  
      console.error(`Error connecting: ${error}`);
    });

  }catch(error){
    console.error(`Could not establish database connection... ${error}`);
    return;
  }
}