const router = require("express").Router();
const habitRoutes = require("./habits");

// TODO This should be the login page  once built
router.use("/habits", habitRoutes);

module.exports = router;