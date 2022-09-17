/**
 * Fetches a single documentin a model collection
 * @param {*} model 
 * @returns A single document that matches the argument model Id
 */

export const getOne = model => async (req, res) => {
  try {
    const modelId = req.params.id;
    const data = await model.findOne({ _id: modelId }).exec();
    res.send(`Got a task back: ${data}`);
  } catch (error) {
    console.error("Failed to get a task: ", error);
    res.send(`Error: ${error}`);
  }
}

/**
 * Fetches all the docs in a collection
 * @param {*} model 
 * @returns All docs in the model collection
 */
export const getMany = model => async (req, res) => {
  try {
    const data = await model.find({}).exec();
    if (!data) res.status(404).json({error: 'No data found'});
    res.status(200).json({data: data});
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

/**
  Creates a document using the specified model parameter
 * @param {*} model 
 * @returns {Object} The created document object
 */
export const createOne = model => async (req, res) => {
  try{
    const details = {...req.body};
    const data = await model.create(details);
    console.log(`Task created! data: ${data}`);
    res.status(200).json({data: data});
  }catch(error){
    console.error(`Error: ${error}`);
    res.status(400).send(`Error creating a task: ${error}`);
  }
}

/**
 * Deletes a document of the specified model paramater
 * @param {*} model 
 * @returns {void}
 */
export const deleteOne = model => async (req, res) => {
  try{
    const modelId = req.params.id;
    const deleted = await model.findByIdAndDelete({ _id: modelId }).exec();
    if(deleted.deletedCount <= 0) res.status(404).json({error: 'No data deleted'});
    res.status(200).json({message: "Task deleted"})
  }catch(error){
    console.error(`Error deleting a task: ${error}`);
  }
}

/**
 * Updates the specified task details
 * @param {*} model 
 * @returns {doc} The updated task
 */
export const updateOne = model => async (req, res) => {
  try{
    const modelId = req.params.id;
    const updates = req.body;
    const updatedDoc = await model.findByIdAndUpdate({_id: modelId}, updates, {new: true}).exec();
    if(!updatedDoc) res.status(404).json({error: 'No data updated'});
    res.status(201).json({data: updatedDoc});
  }catch(error){
    console.error(`Error updating a task: ${error}`);
  }
}

/**
 * Universal CRUD function for any model
 * @param {*} model 
 * @returns {Object} performs CRUD functions using model argumnent
 */
export const crudControllers = (model) => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  deleteOne: deleteOne(model),
  updateOne: updateOne(model)
});
