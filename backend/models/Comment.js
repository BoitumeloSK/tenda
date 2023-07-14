const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./User.js");
const Request = require("./Request.js");
const Comment = sequelize.define(
	"Comment",
	{
		UserId: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: "id",
			},
			allowNull: false,
		},
		RequestId: {
			type: DataTypes.INTEGER,
			references: {
				model: Request,
				key: "id",
			},
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
);
module.exports = Comment;
