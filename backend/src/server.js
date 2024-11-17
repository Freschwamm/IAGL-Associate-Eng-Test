const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);


const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    try {
    res.json(await todoService.getTodos());
    } catch(err) {
      res.status(500).json({err: err.message})
    }
  });

  server.post('/api/todo', async (req, res) => {
    try {
      const { task } = req.body;
      if (!task || task.trim() === "") {
        return res.status(400).send("Task cannot be empty");
      }
      const newTask = await todoService.addTodo({ task })
      res.status(201).json(newTask);
    } catch(err){
      res.status(500).json({err: err.message})
    }
  });

  return server;
};
module.exports = server;