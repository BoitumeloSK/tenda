const { Comment } = require("../models");
require("dotenv").config();
function addComment(req, res) {
	const { id } = req.params;
	const { content } = req.body;
	Comment.findAll({ where: { RequestId: id } }).then((data) => {
		if (data.length == 0) {
			return res
				.status(400)
				.json({ success: false, error: "Request does not exist" });
		}
		const { userId } = JWT.verify(req.cookies.access_token, process.env.SECRET);
		Comment.create({ UserId: userId, RequestId: id, content })
			.then((data) => {
				return res.status(200).json({ success: true, data: data });
			})
			.catch((error) => {
				return res.status(400).json({ success: false, error: error });
			});
	});
}
function deleteComment(req, res) {
	const { id } = req.params;
	Comment.findAll({ where: { id } }).then((data) => {
		if (data.length == 0) {
			return res
				.status(400)
				.json({ success: false, error: "Comment does not exist" });
		}
		const { userId, role } = JWT.verify(
			req.cookies.access_token,
			process.env.SECRET
		);
		if (role != "admin") {
			if (userId != data[0].UserId) {
				return res
					.status(400)
					.json({ success: false, error: "Not authorised to delete comment" });
			}
		}
		Comment.destroy({ where: { id } })
			.then((data) => {
				return res.status(200).json({ success: true, data: data });
			})
			.catch((error) => {
				return res.status(400).json({ success: false, error: error });
			});
	});
}
module.exports = { addComment, deleteComment };
