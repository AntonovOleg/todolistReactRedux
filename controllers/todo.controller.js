const Todo = require('../models/todo.model');

exports.todoCreate = function (req, res) {
  let todo = new Todo({
    todo: req.body.todo,
    isDone: false,
    id: Math.random(),
  });

  todo.save(function (err, test) {
    if (err) return next(err);

    res.send(test);
  });
};

exports.todoUpdate = function (req, res) {
  Todo.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
    if (err) return next(err);
    res.send('Todo updated succesfull');
  });
};

exports.todoDelete = function (req, res) {
  Todo.findByIdAndDelete(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Todo successfully deleted');
  });
};

exports.todoGetAll = function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) return next(err);
    res.send(todos);
  });
};

exports.todoDeleteAll = function (req, res) {
  Todo.deleteMany(null, null, function (err) {
    if (err) return next(err);
    res.send('All Todos deleted successfully');
  });
};

exports.todoCompleteAll = function (req, res) {
  Todo.updateMany({ isDone: false }, { isDone: true }, null, (err) => {
    if (err) return next(err);
    res.send('All tasks marked as completed');
  });
};
