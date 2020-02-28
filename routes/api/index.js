const router = require("express").Router();
const habitRoutes = require("./habits");

// console.log("in routes/api/index.js");
// router.use("/habits", habitRoutes);
router.use("/habits", habitRoutes);

module.exports = router;