//para definir lo que se hace al entrar a una url con router
import { connect } from "../database";

export const getTasks = async (req, res) => {
  const conn = await connect();
  //[rows]: solo pide las filas, no la demas informacion
  const [rows] = await conn.execute("SELECT * FROM tasks");//es lo mismo query y execute?
  res.json(rows);
};
  
export const getTask = async (req, res) => {
  const conn = await connect();
  const [rows] = await conn.execute("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
  console.log(rows[0]);
  res.json(rows[0]);
};

export const getTaskCount = async (req, res) => {
  const conn = await connect();
  const [rows] = await conn.execute("SELECT COUNT(*) FROM tasks");
  //al resultado se le quita el nombre de json
  //exactamente como aparece, mayusculas
  // {
  //   "COUNT(*)": 2
  // }
  res.json(rows[0]["COUNT(*)"]);
};

export const saveTasks = async (req, res) => {
  const conn = await connect();
  const [result] = await conn.execute(
    "INSERT INTO tasks (title, description) VALUES (?,?)",
    [req.body.title, req.body.description])
    res.json({
      //el result del insert te devuelve el id con insertId
      id: result.insertId,
      //este no es el resultado sino la peticion del insert
      ...req.body
    });
  console.log(req.body);
};

export const deleteTasks = async (req, res) => {
  const conn = await connect();
  await conn.execute(
    "DELETE FROM tasks WHERE id =?", [req.params.id]);
  res.sendStatus(204);
};

export const updateTasks = async (req, res) => {
  const conn = await connect();
  //aqui tiene que ser con query no execute
  await conn.query(
    "UPDATE tasks SET title =?, description =? WHERE id =?",
    [req.body.title, req.body.description, req.params.id]);
  res.sendStatus(204);
};
