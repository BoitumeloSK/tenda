const {
	getAllRequests,
	getApprovedRequests,
	getRequest,
	getUserRequests,
	createRequest,
	updateRequest,
	deleteRequest,
} = require("../controllers/service-controller");
const { user } = require("../middleware/auth");
const router = require("express").Router();

router.get("/", getAllRequests);
router.get("/approved", getApprovedRequests);
router.get("/:id", getRequest);
router.get("/myservices/:id", user, getUserRequests);
router.post("/", user, createRequest);
router.put("/:id", user, updateRequest);
router.delete("/:id", user, deleteRequest);

module.exports = router;
