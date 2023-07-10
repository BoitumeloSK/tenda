const router = require("express").Router();
const userRoutes = require("./user-routes");
const requestRoutes = require("./request-routes");
const quotationRoutes = require("./request-routes");

router.use("/users", userRoutes);
router.use("/requests", requestRoutes);
router.use("/quotations", quotationRoutes);

module.exports = router;
