const router = require("express").Router();
const userRoutes = require("./user-routes");
const requestRoutes = require("./request-routes");
const bookingRoutes = require("./booking-routes");

router.use("/users", userRoutes);
router.use("/requests", requestRoutes);
router.use("/bookings", bookingRoutes);

module.exports = router;
