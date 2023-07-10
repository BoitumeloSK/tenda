const User = require("./User");
const Request = require("./Request");
const Comment = require("./Comment");
const Reply = require("./Reply");
const Quotation = require("./Quotation");

Request.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Request, { foreignKey: "UserId" });

Comment.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Comment, { foreignKey: "UserId" });

Comment.belongsTo(Request, { foreignKey: "RequestId" });
Request.hasMany(Comment, { foreignKey: "RequestId" });

Reply.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Reply, { foreignKey: "UserId" });

Reply.belongsTo(Comment, { foreignKey: "CommentId" });
Comment.hasMany(Reply, { foreignKey: "CommentId" });

Quotation.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Quotation, { foreignKey: "UserId" });

Quotation.belongsTo(Request, { foreignKey: "RequestId" });
Request.hasMany(Quotation, { foreignKey: "RequestId" });

module.exports = {
	User,
	Request,
	Comment,
	Reply,
	Quotation,
};
