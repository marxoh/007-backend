//configuracion de express
import express from 'express';
import tasksRoutes from './routes/tasks';

const app = express();

//para poder usar o express.json()
app.use(express.json());

app.use(tasksRoutes)

export default app;