//lee las variables de entorno
import {config as dotenv} from 'dotenv';
dotenv();

console.log(process.env.NICK)

export const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'tasksdb',
}

