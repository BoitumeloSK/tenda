const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./User.js");
const Comment = require("./Comment.js");
const Reply = sequelize.define(
	"Reply",
	{
		UserId: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: "id",
			},
			allowNull: false,
		},
		CommentId: {
			type: DataTypes.INTEGER,
			references: {
				model: Comment,
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
module.exports = Reply;
