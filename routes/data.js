var Client = require('xtuple-rest-client');

exports.getAll = function (req, res) {
  new Client(function (client) {
    client.query({
      type: 'ToDo',
      method: 'list',
      params: { maxResults: 50 },
      callback: function (err, result) {
        if (err) {
          res.send('Error:', err);
        }
        if (result) {
          res.send(result.data.data);
        }
      }
    });
  });
};

exports.addTodo = function (req, res){
  new Client(function (client) {
    client.query({
      type: 'ToDo',
      method: 'insert',
      params: {
        dueDate: req.body.dueDate,
        name: req.body.name,
        isActive:req.body.isActive,
        status: req.body.status
      },
      callback: function (err, result) {
        if (err) {
          res.send('Error:', err);
          return;
        }
        console.log("Just created: " + result.data.id);
      }
    });
  });
};

exports.deleteTodo = function (req, res){
  new Client(function (client) {
    client.query({
      type: 'ToDo',
      method: 'delete',
      params: {
        uuid: req.body.uuid
      },
      callback: function (err, result) {
        if (err) {
          res.send('Error:', err);
          return;
        }
        console.log("Deleted " + result);
      }
    });
  });
};

exports.getTodo = function (req, res){
  new Client(function (client) {
    client.query({
      type: 'ToDo',
      method: 'get',
      params: {uuid: req.query.id},
      callback: function (err, result) {
        if (err) {
          res.send('Error:', err);
          return;
        }
        res.send('To Do:', result);
      }
    });
  });
};

exports.updateTodo = function (req, res){
  new Client(function (client) {
    client.query({
      type: 'ToDo',
      method: 'update',
      params: {
        uuid: req.body.uuid,
        dueDate: req.body.dueDate,
        name: req.body.name,
        isActive:req.body.isActive,
        status: req.body.status
      },
      callback: function (err, result) {
        if (err) {
          res.send('Error:', err);
          return;
        }
        res.send('Updated To Do:', result);
      }
    });
  });
};
