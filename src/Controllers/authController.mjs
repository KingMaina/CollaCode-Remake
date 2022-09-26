import * as userService from '../Services/userService.mjs';
import { createToken } from '../Utils/auth.mjs';

const signup = async (req, res) => {
  try {
    const userDetails = req.body;
    const createdUser = await userService.signup(userDetails);
    const token = createToken(createdUser);
    return res.status(201).send({ status: 'USER CREATED', data: createdUser, token: token });
  } catch (error) {
    return res.status(500).send(`Error trying to create an account: ${error}`);
  }
}

const login = async (req, res) => {
  try {
    const user = await userService.login(req.body);
    console.log(req.headers);
    const token = createToken(user);
    console.log(req.headers);
    return res.status(200).send({ status: 'USER LOGGED IN', data: user, token: token });
  } catch (error) {
    console.error(`Error loggin in: ${error}`);
    return res.status(500).send(`Error loggin in: ${error}`);
  }
}

export {
  signup,
  login
}