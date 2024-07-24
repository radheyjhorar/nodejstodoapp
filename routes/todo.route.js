const express = require('express');
const {getTasks, addTask, deleteTask} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getTasks)
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.put('/', );


module.exports = router;