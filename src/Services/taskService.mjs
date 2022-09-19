import * as tasksDB from '../Database/Task.mjs';

const getOneTask = async (taskId) => {
  try {
    const task = await tasksDB.getOneTask(taskId);
    return task;
  } catch (error) {
    throw error;
  }
}

/**
 * Fetches all the tasks from the database
 * @param {*} any  
 * @returns All tasks from the database
 */
const getAllTasks = async () => {
  try {
    const allTasks = await tasksDB.getAllTasks();
    return allTasks;
  } catch (error) {
    throw error;
  }
}

const createTask = async (taskDetails) => {
  try {
    const createdTask = await tasksDB.createTask(taskDetails);
    return createdTask;
  } catch (error) {
    throw error;
  }
}

const deleteTask = async(taskId) => {
  try{
    const deletedTask = await tasksDB.deleteTask(taskId);
    return deletedTask;
  }catch(error){
    throw error;
  }
}

const updateTask = async (taskId, updates) => {
  try {
    const updatedTask = tasksDB.updateTask(taskId, updates);
    return updatedTask;
  } catch (error) {
    throw error;
  }
}

export {
  getOneTask,
  getAllTasks,
  createTask,
  deleteTask,
  updateTask
};