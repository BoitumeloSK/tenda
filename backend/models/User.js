const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = sequelize.define(
	"User",
	{
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		about: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.STRING,
		},
		role: {
			type: DataTypes.STRING,
			defaultValue: "customer",
		},
		userFiles: {
			type: DataTypes.STRING,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	},
	{
		freezeTableName: true,
	}
);
module.exports = User;
