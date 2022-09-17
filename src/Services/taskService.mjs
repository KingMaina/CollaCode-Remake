import * as dotenv from 'dotenv';
dotenv.config();
import Task from '../Models/taskModel.mjs';
import { Schema } from 'mongoose';
import { dbConnect } from '../Utils/db.mjs';

const getOneTask = async() => {
 return "Got one task"; 
}

const getAllTasks = async() => {
 return "Got all tasks"; 
}

const createTask = () => {
 return "created one task"; 
}

const deleteTask = () => {
 return "deleted task"; 
}

const updateTask = () => {
 return "updated task"; 
}
