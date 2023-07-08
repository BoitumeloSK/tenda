const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./User");
const Reply = sequelize.define(
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
		CommentId: {
			type: DataTypes.INTEGER,
			references: {
				model: Comment,
				key: "id",
			},
			allowNull: false,
		},
		body: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
);
module.exports = Reply;
