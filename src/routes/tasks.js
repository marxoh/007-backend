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

router.get("/tasks", getTasks);

//para contar todas las tareas
router.get("/tasks/count", getTaskCount);

//obtener una unica tarea solo con un id
router.get("/tasks/:id", getTask);

//crear una tarea
router.post("/tasks", saveTasks);

//borrar una tarea
router.delete("/tasks/:id", deleteTasks);

//actualizar una tarea
router.put("/tasks/:id", updateTasks);

export default router;
