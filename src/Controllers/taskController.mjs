import * as taskService from "../Services/taskService.mjs";


const getOne = async (req, res) => {
  try {
    const modelId = req.params.id;
    const data = await taskService.getOneTask(modelId);
    res.status(200).send(`Got a task back: ${data}`);
  } catch (error) {
    console.error("Failed to get a task: ", error);
    res.status(500).send({
      error: {
        status: 'FAILED',
        code: 500,
        message: error?.message || error
      }
    });
  }
}


const getMany = async (req, res) => {
  try {
    const data = await taskService.getAllTasks();
    res.status(200).send({ status: 'ok', data: data });
  } catch (error) {
    res.status(500).send({
      error: {
        status: 'FAILED',
        code: 500,
        message: error?.message || error
      }
    });
  }
}

const createOne = async (req, res) => {
  try{
    const taskDetails = {...req.body};
    const data = await taskService.createTask(taskDetails);
    res.status(201).send({status: 'OK', data: data});
  }catch(error){
    res.status(500).json({
      error: {
        status: 'FAILED', 
        message: error?.message || error
      }
    });
  }
}

const updateOne = async(req, res) => {
  try{
    const taskId = req.params.id;
    const updates = {...req.body};
    const updatedTask = await taskService.updateTask(taskId, updates);
    res.status(201).send({status: 'UPDATED', data: updatedTask});
  }catch(error){
    res.status(500).send({status: 'FAILED', message: error?.message || error});
  }
}

const deleteOne = async(req, res) => {
  try{
    const taskId = req.params.id;
    const deletedTask = await taskService.deleteTask(taskId);
    res.status(200).send({status: 'DELETED', data: deletedTask ,message: 'Task deleted'})
  }catch(error){
    res.status(500).send({status: 'FAILED', message: error?.message || error});
  }
}

export {
  getOne,
  getMany,
  createOne,
  updateOne,
  deleteOne
};