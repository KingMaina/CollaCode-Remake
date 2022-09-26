import User from '../Models/userModel.mjs';

const create = async(userDetails) => {
  try{
    const createdUser = await User.create(userDetails);
    return createdUser;
  }catch(error){
    if(error.code === 11000){
      throw "Email already exists";
    }
    return error;
  }
};

const login = async(userDetails) => {
  try{
    const { email, password} = userDetails;
    const user = await User.findOne({ email });
    if(password !== user.password) throw new Error("Passwords don't match");
    return user;
  }catch(error){
    throw error;
  }
};

const getOne = async(id) => {
  try{
    const user = await User.findById(id)
    .select('-password')
    .lean()
    .exec();
    return user;
  }catch(error){
    throw error;
  }
};

const deleteOne = async(userId) => {

};

const updateOne = async(userId, updates) => {

};

const getAll = async() => {

};

export {
  create,
  login,
  getOne,
  deleteOne,
  updateOne,
  getAll
};