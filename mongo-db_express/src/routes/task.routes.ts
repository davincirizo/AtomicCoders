import { Router } from "express";
import { taskController } from "../controllers/task.controller";

export const routerTask = Router()

routerTask.get('/',taskController.indexTask)
routerTask.post('/',taskController.create)
routerTask.put('/:id',taskController.update)
routerTask.delete('/:id',taskController.delete)
