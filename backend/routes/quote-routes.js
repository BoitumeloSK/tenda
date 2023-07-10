const {
	getQuotation,
	getRequestQuotations,
	getUserQuotations,
	createQuotation,
	approveQuotation,
	completeService,
	deleteQuotation,
} = require("../controllers/quotation-controller");
const router = require("express").Router();

router.get("/:id", getQuotation);
router.get("/myrequest/:requestId", getRequestQuotations);
router.get("/myQuotations/:id", getUserQuotations);
router.post("/", createQuotation);
router.put("/approve/:id", approveQuotation);
router.put("/complete/:id", completeService);
router.delete("/", deleteQuotation);

module.exports = router;
