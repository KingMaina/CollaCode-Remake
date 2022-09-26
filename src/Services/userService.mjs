import * as User from '../Database/User.mjs';

const signup = async (userDetails) => {
  try {
    const user = await User.create(userDetails);
    console.log("User service: ", user)
    return user;
  } catch (error) {
    throw error;
  }
}

const login = async (userDetails) => {
  try {
    const user = await User.login(userDetails);
    return user;
  } catch (error) {
    throw error;
  }
}

const getOne = async(userId) => {
  try{
    const user = await User.getOne(userId);
    return user;
  }catch(error){
    throw error;
  }
}

export {
  signup,
  login,
  getOne
}
