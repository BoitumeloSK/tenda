const router = require("express").Router();
const userRoutes = require("./user-routes");
const requestRoutes = require("./request-routes");
const quotationRoutes = require("./request-routes");
const commentRoutes = require("./comment-routes");
const replyRoutes = require("./reply-routes");

router.use("/users", userRoutes);
router.use("/requests", requestRoutes);
router.use("/quotations", quotationRoutes);
router.use("/comments", commentRoutes);
router.use("/replies", replyRoutes);

module.exports = router;
