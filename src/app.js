//configuracion de express
import express from 'express';
//conectarse con cors
import cors from 'cors';
import morgan from'morgan';

import swaggerJSdoc from'swagger-jsdoc';
import swaggerUI from'swagger-ui-express';
import {options} from './swaggerOptions';

const swaggerSpecs = swaggerJSdoc(options);

import tasksRoutes from './routes/tasks';

const app = express();

//conectarse con cors
app.use(cors());
//morgan necesita una propiedad dev
app.use(morgan('dev'));

//para poder usar express.json()
app.use(express.json());

app.use(tasksRoutes)

//cuando se accesa a /docs an la api

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

export default app;