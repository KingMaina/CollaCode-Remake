import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import v1TaskRoutes from './v1/Routes/taskRoutes.mjs';
import v1UserRoutes from './v1/Routes/userRoutes.mjs';

const app = express();

const PORT = process.env.PORT || 4000;

// register middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// register routes
app.use('/api/v1/tasks', v1TaskRoutes);
app.use('/api/v1/users', v1UserRoutes);

// start the server
app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});