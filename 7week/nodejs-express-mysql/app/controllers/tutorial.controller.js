const Tutorial = require("../models/tutorial.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
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

  Tutorial.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};


exports.findAll = (req, res) => {
  const title = req.query.title;
  Tutorial.findAll(title, (err, data) => {
    if (err) {
         res.status(500).send({
          message:
            err.message || "Some error occurred while finding tutorials"
        });
      return
    }
    res.send(data);
  }
  );
};


exports.findById = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
        return
      }
      res.status(500).send({
        message: "Error updating Tutorial with id " + req.params.id
      });
      return
    }
    res.send(data);
  }
  );
};



exports.deleteOne = (req, res) => {
  Tutorial.deleteOne(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error delete Tutorial with id " + req.params.id
      });

      return
    }
    res.send(data)
  });
};


exports.deleteAll = (req, res) => {
  Tutorial.deleteAll(req.query.title, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error"
      });

      return
    }
    res.send(data)
  })
}






