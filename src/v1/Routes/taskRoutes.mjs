import {Router} from 'express';
import taskController from '../../Controllers/taskController.mjs';

const router = Router();

// /api/v1/tasks
router
.route('/')
.get(taskController.getMany)
.post(taskController.createOne);

// /api/v1/tasks/:id
router
.route('/:id')
.get(taskController.getOne)
.put(taskController.updateOne);
export default router;