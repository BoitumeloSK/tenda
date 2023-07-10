const { Quotation, Request } = require("../models");
const JWT = require("jsonwebtoken");
require("dotenv").config();

//For user who quotations are sent to
function getRequestQuotations(req, res) {
	const { id } = req.params;
	Request.findAll({ where: { id: requestId } })
		.then((data) => {
			const { userId, role } = JWT.verify(
				req.cookies.access_token,
				process.env.SECRET
			);
			if (userId != data[0].UserId || role != "admin") {
				return res.status(400).json({
					success: false,
					error: "Not authorised to view quotations for this request",
				});
			}
			Quotation.findAll({ where: { RequestId: requestId } }).then((data) => {
				if (data.length == 0) {
					return res.status(400).json({
						success: false,
						error: "No quotations sent for this request",
					});
				}
				return res.status(200).json({ success: true, data: data });
			});
		})
		.catch((error) => {
			return res.status(400).json({ success: false, error: error });
		});
}

//For user who quotations are sent to
function getQuotation(req, res) {
	const { id } = req.params;
	Request.findAll({ where: { id } })
		.then((data) => {
			if (data.length == 0) {
				return res
					.status(400)
					.json({ success: false, error: "Quotation does not exist" });
			}
			return res.status(200).json({ success: true, data: data });
		})
		.catch((error) => {
			return res.status(400).json({ success: false, error: error });
		});
}

//For service provider
function getUserQuotations(req, res) {
	const { id } = req.params;
	Quotation.findAll({ where: { UserId: id } })
		.then((data) => {
			const { userId, role } = JWT.verify(
				req.cookies.access_token,
				process.env.SECRET
			);
			if (userId != id || role != "admin") {
				return res.status(400).json({
					success: false,
					error: "Not authorised to view user quotations",
				});
			}
			if (data.length == 0) {
				return res
					.status(400)
					.json({ success: false, error: "No quotations found" });
			}
			return res.status(200).json({ success: true, data: data });
		})
		.catch((error) => {
			return res.status(400).json({ success: false, error: error });
		});
}

function createQuotation(req, res) {
	const { id } = req.params;
	const { rate, addtionalNotes, fromWhom } = req.body;
	const { userId } = JWT.verify(req.cookies.access_token, process.env.SECRET);
	Request.findAll({ where: { id } }).then((data) => {
		if (data.length == 0) {
			return res.status(400).json({
				success: false,
				error: "Request not found",
			});
		}
		Quotation.create({
			UserId: userId,
			RequestId: id,
			toWhom: "Jackie",
			fromWhom,
			serviceType: data[0].serviceType,
			location: data[0].location,
			serviceDate: data[0].serviceDate,
			serviceType: data[0].serviceType,
			description: data[0].description,
			addtionalNotes,
			rate,
		})
			.then((data) => {
				return res.status(200).json({ success: true, data: data });
			})
			.catch((error) => {
				return res.status(400).json({ success: false, error: error });
			});
	});
}
//For service poster
function approveQuotation(req, res) {
	const { id } = req.params;
	const { approved } = req.body;
	const { userId } = JWT.verify(req.cookies.access_token, process.env.SECRET);
	Quotation.findAll({ where: { id } }).then((data) => {
		if (data.length == 0) {
			return res
				.status(400)
				.json({ success: false, error: "Quotation not found" });
		}
		Request.findAll({ where: { id: data[0].RequestId } }).then((data) => {
			if (userId != data[0].UserId) {
				return res.status(400).json({
					success: false,
					error: "Not authorised to approve quotation",
				});
			}
			Quotation.update({ approved }, { where: { id } })
				.then((data) => {
					return res.status(200).json({ success: true, data: data });
				})
				.catch((error) => {
					return res.status(400).json({ success: false, error: error });
				});
		});
	});
}

function completeService(req, res) {
	const { id } = req.params;
	const { serviceComplete } = req.body;
	const { userId } = JWT.verify(req.cookies.access_token, process.env.SECRET);
	Quotation.findAll({ where: { id } }).then((data) => {
		if (data.length == 0) {
			return res
				.status(400)
				.json({ success: false, error: "Quotation not found" });
		}
		if (userId != data[0].UserId) {
			return res.status(400).json({
				success: false,
				error: "Not authorised to access service completion aciton.",
			});
		}
		if (data[0].approved == false) {
			return res
				.status(400)
				.json({ success: false, error: "Quotation not approved" });
		}
		Quotation.update({ serviceComplete }, { where: { id } })
			.then((data) => {
				return res.status(200).json({ success: true, data: data });
			})
			.catch((error) => {
				return res.status(400).json({ success: false, error: error });
			});
	});
}
//For service provider
function deleteQuotation(req, res) {
	const { id } = req.params;
	Quotation.findAll({ where: { id } }).then((data) => {
		if (data.length == 0) {
			return res
				.status(400)
				.json({ success: false, error: "Request does not exist" });
		}
		const { userId } = JWT.verify(req.cookies.access_token, process.env.SECRET);

		if (data[0].UserId != userId) {
			return res.status(400).json({
				success: false,
				error: "Not authorised to delete this service",
			});
		}
		if (data[0].approved == false && !data[0].completed == false) {
			Request.destroy({ where: { id } })
				.then((data) => {
					return res.status(200).json({ success: true, data: data });
				})
				.catch((error) => {
					return res.status(400).json({ success: false, error: error });
				});
		} else {
			return res
				.status(400)
				.json({ success: false, error: "Service still in progress" });
		}
	});
}

module.exports = {
	getQuotation,
	getRequestQuotations,
	getUserQuotations,
	createQuotation,
	approveQuotation,
	completeService,
	deleteQuotation,
};
