const router = require("express").Router();
const habitRoutes = require("./habits");
const userRoutes = require("./userRoutes");


// console.log("in routes/api/index.js");
// router.use("/habits", habitRoutes);
router.use("/habits", habitRoutes);
router.use("/users", userRoutes);

module.exports = router;