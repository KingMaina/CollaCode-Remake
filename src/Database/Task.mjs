import Task from '../Models/taskModel.mjs';


/**
 * Fetches a single task from the database
 * @param {String} taskId 
 * @returns A single task from the database 
*/
const getOneTask = async (taskId) => {
  try {
    const taskData = await Task.findOne({ _id: taskId }).exec();
    if (!taskData) throw {
      error: {
        status: "FAILED",
        code: 404,
        message: `No data found for the task with id: ${taskId}`
      }
    };
    return taskData;

  } catch (error) {
    throw {
      error: {
        status: 'FAILED',
        code: 500,
        message: `${error?.message || error}`
      }
    };
  }
}

/**
 * Fetches all the tasks from the database
 * @param {*} any  
 * @returns All tasks from the database
 */
const getAllTasks = async () => {
  try {
    const allTasks = await Task.find({}).exec();
    if (!allTasks) throw {
      status: 'FAILED',
      statusCode: 404,
      message: `Unable to retrieve all tasks`
    }
    return allTasks;
  } catch (error) {
    throw {
      error: {
        status: 'FAILED',
        code: 500,
        message: `${error?.message || error}`
      }
    }
  }
}

/**
  Creates a task
 * @param {Object} task_details details for the task to create
 * @returns {Object} The created task
 */
const createTask = async (taskDetails) => {
  try {
    const createdTask = new Task({ ...taskDetails});
    if (!createdTask) throw {
      error: {
        status: 'FAILED',
        code: 400,
        message: `Unable to create a task`
      }
    };
    return createdTask;
  } catch (error) {
    throw {
      error: {
        status: 'FAILED',
        code: 500,
        message: error?.message || error
      }
    };
  }
}

/**
 * Deletes a task
 * @param {String} task_ID the id of the task 
 * @returns {*} the deleted task
 */
const deleteTask = async (taskId) => {
  try {
    const deletedTask = await Task.findByIdAndDelete({ _id: taskId }, {new: true}).exec();
    if (!deletedTask) throw {
      error: {
        status: 'FAILED',
        code: 400,
        message: `Unable to delete task with the id: ${taskId}`
      }
    };
    return deletedTask;
  } catch (error) {
    throw {
      error: {
        status: 'FAILED',
        code: 500,
        message: error?.message || error
      }
    };
  }
}

/**
 * Updates a task
 * @param {String} task_ID the id of the task 
 * @param {Object} updates the details to update
 * @returns {Object} the updated task
 */
const updateTask = async (taskId, updatedDetails) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate({ _id: taskId}, {...updatedDetails }, {new: true}).exec();
    if (!updatedTask) throw {
      error: {
        status: 'FAILED',
        code: 400,
        message: `Could not update task with the id: ${taskId}`
      }
    };
    return updatedTask;
  } catch (error) {
    throw {
      error: {
        status: 'FAILED',
        code: 500,
        message: error?.message || error
      }
    };
  }
}
export {
  getOneTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};
