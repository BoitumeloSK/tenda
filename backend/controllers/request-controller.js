const { Request, Reply, Quotation } = require("../models");
const JWT = require("jsonwebtoken");
require("dotenv").config();

function getAllRequests(req, res) {
	Request.findAll()
		.then((data) => {
			return res.status(200).json({ success: true, data: data });
		})
		.catch((error) => {
			return res.status(400).json({ success: false, error: error });
		});
}

function getRequest(req, res) {
	const { id } = req.params;
	Request.findAll(
		{
			include: [{ model: Comment }, { include: [{ model: Reply }] }],
		},
		{ where: { id } }
	)
		.then((data) => {
			if (data.length == 0) {
				return res
					.status(400)
					.json({ success: false, error: "Request does not exist" });
			}
			return res.status(200).json({ success: true, data: data });
		})
		.catch((error) => {
			return res.status(400).json({ success: false, error: error });
		});
}

function getVisibleRequests(req, res) {
	Request.findAll({ where: { visible: true } })
		.then((data) => {
			if (data.length == 0) {
				return res
					.status(400)
					.json({ success: false, error: "No requests found" });
			}
			return res.status(200).json({ success: true, data: data });
		})
		.catch((error) => {
			return res.status(400).json({ success: false, error: error });
		});
}

function getUserRequests(req, res) {
	const { id } = req.params;
	Request.findAll({ where: { UserId: id } })
		.then((data) => {
			const { userId } = JWT.verify(
				req.cookies.access_token,
				process.env.SECRET
			);
			if (userId != id) {
				return res.status(400).json({ success: false, error: "Access denied" });
			}
			if (data.length == 0) {
				return res
					.status(400)
					.json({ success: false, error: "No requests found" });
			}
			return res.status(200).json({ success: true, data: data });
		})
		.catch((error) => {
			return res.status(400).json({ success: false, error: error });
		});
}

function createRequest(req, res) {
	const { serviceType, description, title, image, price } = req.body;
	const { userId } = JWT.verify(req.cookies.access_token, process.env.SECRET);
	Request.findAll({ where: { description, UserId: userId } }).then((data) => {
		if (data.length > 0) {
			return res.status(400).json({
				success: false,
				error: "You have already posted this request",
			});
		}
		Request.create({
			serviceType,
			description,
			image,
			price,
			title,
			UserId: userId,
		})
			.then((data) => {
				return res.status(200).json({ success: true, data: data });
			})
			.catch((error) => {
				return res.status(400).json({ success: false, error: error });
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
		Request.update({ serviceComplete }, { where: { id: data[0].RequestId } })
			.then((data) => {
				return res.status(200).json({ success: true, data: data });
			})
			.catch((error) => {
				return res.status(400).json({ success: false, error: error });
			});
	});
}

function updateRequest(req, res) {
	const { id } = req.params;
	const { serviceType, description, image, price, visible } = req.body;
	const updates = {};
	Request.findAll({ where: { id } }).then((data) => {
		if (data.length == 0) {
			return res
				.status(400)
				.json({ success: false, error: "Service does not exist" });
		} else {
			const { userId } = JWT.verify(
				req.cookies.access_token,
				process.env.SECRET
			);

			if (data[0].UserId != userId) {
				return res.status(400).json({
					success: false,
					error: "Not authorised to make chnages to this service",
				});
			}

			if (serviceType) {
				updates["serviceType"] = serviceType;
			}
			if (description) {
				updates["description"] = description;
			}
			if (image) {
				updates["image"] = image;
			}
			if (price) {
				updates["price"] = price;
			}

			Request.update(updates, { where: { id } })
				.then((data) => {
					return res.status(200).json({ success: true, data: data });
				})
				.catch((error) => {
					return res.status(400).json({ success: false, error: error });
				});
		}
	});
}

function deleteRequest(req, res) {
	const { id } = req.params;
	Request.findAll({ where: { id } }).then((data) => {
		if (data.length == 0) {
			return res
				.status(400)
				.json({ success: false, error: "Request does not exist" });
		} else {
			const { userId } = JWT.verify(
				req.cookies.access_token,
				process.env.SECRET
			);

			if (data[0].id != userId) {
				return res.status(400).json({
					success: false,
					error: "Not authorised to delete this service",
				});
			}
			if (data[0].approved) {
				return res
					.status(400)
					.json({ success: false, error: "Service still in progress" });
			}
			Request.destroy({ where: { id } })
				.then((data) => {
					return res.status(200).json({ success: true, data: data });
				})
				.catch((error) => {
					return res.status(400).json({ success: false, error: error });
				});
		}
	});
}

module.exports = {
	getAllRequests,
	getVisibleRequests,
	getRequest,
	getUserRequests,
	createRequest,
	completeService,
	updateRequest,
	deleteRequest,
};
