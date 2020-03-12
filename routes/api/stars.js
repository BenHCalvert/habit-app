const router = require("express").Router();
const starController = require("../../controllers/starsController");

// console.log("in api/habits.js");

// Matches with "/api/habits/:id"
router.route("/:id")
  .get(starController.findById)
  .put(starController.update)

module.exports = router;