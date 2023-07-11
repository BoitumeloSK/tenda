const {
	addComment,
	deleteComment,
} = require("../controllers/comment-controller");
const { auth } = require("../middleware/auth");
const router = require("express").Router();
router.post("/:id", auth, addComment);
router.delete("/:id", auth, deleteComment);
module.exports = router;
