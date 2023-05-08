//configuracion de express
import express from 'express';
//conectarse con cors
import cors from 'cors';
import morgan from'morgan';
import tasksRoutes from './routes/tasks';

const app = express();

//conectarse con cors
app.use(cors());
//morgan necesita una propiedad dev
app.use(morgan('dev'));

//para poder usar express.json()
app.use(express.json());

app.use(tasksRoutes)

export default app;