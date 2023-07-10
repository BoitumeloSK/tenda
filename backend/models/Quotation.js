const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./User");
const Request = require("./Request");
const Quotation = sequelize.define(
	"Quotation",
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
		location: {
			type: DataTypes.STRING,
		},
		toWhom: {
			type: DataTypes.STRING,
		},
		fromWhom: {
			type: DataTypes.STRING,
		},
		serviceDate: {
			type: DataTypes.DATEONLY,
		},
		quotationDate: {
			type: DataTypes.DATEONLY,
			defaultValue: DataTypes.NOW,
		},
		serviceType: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
		rate: {
			type: DataTypes.DOUBLE(10, 2),
		},
		additionalNotes: {
			type: DataTypes.STRING,
		},
		approved: {
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
module.exports = Quotation;
