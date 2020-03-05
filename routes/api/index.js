const router = require("express").Router();
const habitRoutes = require("./habits");
const rewardRoutes = require("./rewards");

// console.log("in routes/api/index.js");
// router.use("/habits", habitRoutes);
router.use("/habits", habitRoutes);
router.use("/rewards", rewardRoutes);

module.exports = router;