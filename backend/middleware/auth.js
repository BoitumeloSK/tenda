require("dotenv").config();
const JWT = require("jsonwebtoken");

const auth = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return res
			.status(400)
			.json({ success: false, error: "Token not provided" });
	}

	try {
		const user = JWT.verify(token, process.env.SECRET);
		req.user = user;
		next();
	} catch {
		return res.status(400).json({ success: false, error: "Invalid token" });
	}
};

const admin = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return res
			.status(400)
			.json({ success: false, error: "Token not provided" });
	}

	try {
		const { role } = JWT.verify(token, process.env.SECRET);
		if (role != "admin") {
			return res.status(400).json({ success: false, error: "Access Denied" });
		}
		next();
	} catch {
		return res.status(400).json({ success: false, error: "Invalid token" });
	}
};

const user = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return res
			.status(400)
			.json({ success: false, error: "Token not provided" });
	}

	try {
		const { role } = JWT.verify(token, process.env.SECRET);
		if (role != "user" || role != "admin") {
			return res.status(400).json({ success: false, error: "Access Denied" });
		}
		next();
	} catch {
		return res.status(400).json({ success: false, error: "Invalid token" });
	}
};

const provider = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return res
			.status(400)
			.json({ success: false, error: "Token not provided" });
	}

	try {
		const { role } = JWT.verify(token, process.env.SECRET);
		if (role != "provider" || role != "admin") {
			return res.status(400).json({ success: false, error: "Access Denied" });
		}
		next();
	} catch {
		return res.status(400).json({ success: false, error: "Invalid token" });
	}
};

module.exports = {
	auth,
	admin,
	user,
	provider,
};
