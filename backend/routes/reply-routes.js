const { addReply, deleteReply } = require("../controllers/reply-controller");
const { auth } = require("../middleware/auth");
const router = require("express").Router();
router.post("/:id", auth, addReply);
router.delete("/:id", auth, deleteReply);
module.exports = router;
