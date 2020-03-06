const router = require("express").Router();
const rewardsController = require("../../controllers/rewardsController");

console.log("in api/rewards.js");
// Matches with "/api/rewards"
router.route("/")
  .get(rewardsController.findAll)
  .post(rewardsController.create);

// Matches with "/api/rewards/:id"
router.route("/:id")
  .get(rewardsController.findById)
  .put(rewardsController.update)
  .delete(rewardsController.remove);

module.exports = router;