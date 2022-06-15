const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller.js');

router.post('/create', todoController.todoCreate);
router.put('/id/:id/update', todoController.todoUpdate);
router.delete('/id/:id/delete', todoController.todoDelete);
router.get('/getall', todoController.todoGetAll);
router.delete('/delete_all', todoController.todoDeleteAll);
router.put('/complete_all',todoController.todoCompleteAll);

module.exports = router;