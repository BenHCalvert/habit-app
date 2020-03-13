const router = require("express").Router();
const habitRoutes = require("./habits");
const rewardRoutes = require("./rewards");
const userRoutes = require("./userRoutes");

router.use("/habits", habitRoutes);
router.use("/rewards", rewardRoutes);
router.use("/users", userRoutes);

module.exports = router;