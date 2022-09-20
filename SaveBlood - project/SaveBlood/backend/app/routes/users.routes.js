module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // // Retrieve all Users
  router.get("/", users.findAll);

    // // Retrieve a single User with email
    router.get("/:email", users.findByEmail);

     // // Retrieve a single User with password
     router.get("/:pasword", users.findByPassword);

  // // Update an User with email
  router.put("/:email", users.updateByEmail);

  // // Delete an User with email
  router.delete("/:email", users.deleteOne);

  // // Delete all Users
  router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};
