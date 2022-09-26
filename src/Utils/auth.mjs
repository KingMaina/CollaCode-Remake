import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const createToken = (user) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d'});
}

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, payload) => {
      if(error) reject(error);
      resolve(payload);
    });
  });
}

export{
  createToken,
  verifyToken
}