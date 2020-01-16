const express = require('express');
const router = express.Router();
const todoController = require('./todoController');

// route for displaying a list of todos
router.get('/list',  todoController.getTodoList);


// Route for displaying a todo by id
router.get('/:id', todoController.getTodo);



// Route for updating a todo
router.put('/:id', todoController.updateTodo)

module.exports = router;