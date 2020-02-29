const router = require("express").Router();
const habitsController = require("../../controllers/habitsController");

// console.log("in api/habits.js");
// Matches with "/api/habits"
router.route("/")
  .get(habitsController.findAll)
  .post(habitsController.create);

// Matches with "/api/habits/:id"
router.route("/:id")
  .get(habitsController.findById)
  .put(habitsController.update)
  .delete(habitsController.remove);

module.exports = router;