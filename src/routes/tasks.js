import { Router } from "express";
import {
  deleteTasks,
  getTask,
  getTaskCount,
  getTasks,
  saveTasks,
  updateTasks,
} from "../controllers/tasks";

const router = Router();

// /**
//  * @swagger
//  * tags:
//  *  name: Tasks
//  *  description: tasks endpoint
//  */

// /**
//  * @swagger
//  * /tasks:
//  *  get:
//  *    summary: obtiene todas las tareas
//  *    tags: [Tasks] //pertenece al tag Tasks
//  */
router.get("/tasks", getTasks);

// /**
//  * @swagger
//  * /tasks/count:
//  *  get:
//  *    summary: obtiene el total de las tareas
//  *    tags: [Tasks]
//  */
router.get("/tasks/count", getTaskCount);

// /**
//  * @swagger
//  * /tasks/{id}:
//  *  get:
//  *    summary: Get task by Id
//  *    tags: [Tasks]
//  */
router.get("/tasks/:id", getTask);

// /**
//  * @swagger
//  * /tasks:
//  *  post:
//  *    summary: crear una tarea
//  *    tags: [Tasks]
//  */
router.post("/tasks", saveTasks);

// /**
//  * @swagger
//  * /tasks:
//  *  delete:
//  *    summary: borrar una tarea
//  *    tags: [Tasks]
//  */
router.delete("/tasks/:id", deleteTasks);

// /**
//  * @swagger
//  * /tasks:
//  *  put:
//  *    summary: actualizar una tarea
//  *    tags: [Tasks]
//  */
router.put("/tasks/:id", updateTasks);

export default router;
