const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./User");
const Request = sequelize.define(
	"Request",
	{
		UserId: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: "id",
			},
			allowNull: false,
		},
		serviceType: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
		image: {
			type: DataTypes.STRING,
		},
		price: {
			type: DataTypes.DOUBLE(10, 2),
		},
		approved: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
	{
		freezeTableName: true,
	}
);
module.exports = Request;
