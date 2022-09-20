module.exports = app => {
  const booking = require("../controllers/booking.controller.js");

  var router = require("express").Router();

  // Create a new Booking
  router.post("/", booking.create);

  // // Retrieve all Booking
  router.get("/", booking.findAll);

  // // Retrieve a single Booking with Email
  router.get("/:email", booking.findByEmail);

  // // Update an Booking with Email
  router.put("/:email", booking.update);

  // // Delete an Booking with email
  router.delete("/:email", booking.deleteOne);

  // // Delete all Booking
  router.delete("/", booking.deleteAll);

  app.use('/api/booking', router);
};
