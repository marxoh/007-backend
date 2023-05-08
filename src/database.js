import mysql from "mysql2/promise"; //ya soporta promesas llamando a promise
import { config } from "./config";

export const connect = async () => {
  return await mysql.createConnection(config);
};
