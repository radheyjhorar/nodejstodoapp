const todoModel = require('../models/todo.model');

const __getTask = async () => {
  const task = await todoModel.find();
  return task;
}

const getTasks = async (req, res) => {
  try {
    const tasks = await __getTask();
    res.render('pages/home', { tasks });
  } catch (error) {
    console.log("Get Tasks Error: ", error);
  }
}

const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const createTask = await todoModel.create({ title, description });
    console.log(createTask);

  } catch (error) {
    console.log("Add Tasks Error: ", error);
  }
  const tasks = await __getTask();
  res.render('pages/home', { tasks });
}

const deleteTask = async (req, res) => {
  try {
    const deleteTask = await todoModel.findByIdAndDelete(req.params.id);
    res.status(200).send({msg: "Task deleted successfully"});
  } catch (error) {
    console.log("Delete Task Error: ", error);
  }
}

module.exports = { getTasks, addTask, deleteTask };
