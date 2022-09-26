import { verifyToken } from '../Utils/auth.mjs';
import * as userService from '../Services/userService.mjs';

const protect = async (req, res, next) => {
  if(!req.headers.authorization) return res.status(401).send('No token');
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    if(!token) return res.status(401).send({message: 'No token'});
    const payload = await verifyToken(token);
    console.log(`Payload ${payload}`);
    const user = await userService.getOne(payload.id);
    console.log(`User found: ${user}`);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).send({error: error});
  }
}

export{
  protect
}