const {
	getAllRequests,
	getVisibleRequests,
	getRequest,
	getUserRequests,
	createRequest,
	completeService,
	updateRequest,
	deleteRequest,
} = require("../controllers/request-controller");
const { user } = require("../middleware/auth");
const router = require("express").Router();

router.get("/", getAllRequests);
router.get("/visible", getVisibleRequests);
router.get("/:id", getRequest);
router.get("/myservices/:id", user, getUserRequests);
router.post("/", user, createRequest);
router.put("/:id", user, updateRequest);
router.put("/complete/:id", completeService);
router.delete("/:id", user, deleteRequest);

module.exports = router;
