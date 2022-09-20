const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create an User
  const user = new User({
    name: req.body.name,
    lastname: req.body.name,
    email: req.body.email,
    password: req.body.password,
    // published: req.body.published || false
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  User.updateByEmail(
    req.params.email,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.email}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.email
          });
        }
      } else {
        res.send(data);
        redisClient.clearCache()
      }
    }
  );
};


exports.findAll = (req, res) => {
  const name = req.query.name;
  User.findAll(name, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding users"
      });
      return
    }
    res.send(data);
  }
  );
};


exports.findByPassword = (req, res) => {
  redisClient.getCache()
  User.findByPassword(req.params.password, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with password ${req.params.password}.`
        });
        return
      }
      res.status(500).send({
        message: "Error updating User with password " + req.params.password
      });
      return
    }
    res.send(data);
  }
  );
};

exports.findByEmail = (req, res) => {
  redisClient.getCache()
  User.findEmail(req.params.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with email ${req.params.email}.`
        });
        return
      }
      res.status(500).send({
        message: "Error updating User with id " + req.params.email
      });
      return
    }
    res.send(data);
  }
  );
};



exports.deleteOne = (req, res) => {
  User.deleteOne(req.params.email, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error delete User with email " + req.params.email
      });

      return
    }
    res.send(data)
  });
};


exports.deleteAll = (req, res) => {
  User.deleteAll(req.query.name, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error"
      });

      return
    }
    res.send(data)
  })
}






