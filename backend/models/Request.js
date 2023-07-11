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
		location: {
			type: DataTypes.STRING,
		},
		price: {
			type: DataTypes.DOUBLE(10, 2),
		},
		serviceDate: {
			type: DataTypes.DATEONLY,
		},
		visible: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		serviceComplete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
	{
		freezeTableName: true,
	}
);
module.exports = Request;
