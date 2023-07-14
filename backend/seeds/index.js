const sequelize = require("../config/config");
const { User } = require("../models");
const bcrypt = require("bcrypt");

sequelize.sync({ force: false }).then(async () => {
	const hash = await bcrypt.hash("test123", 10);
	await User.bulkCreate([
		{
			email: "customer@email.com",
			password: hash,
			name: "Customer",
			userFiles: "https://res.cloudinary.com/demo/image/twitter/1330457336.jpg",
			about: "I am a customer",
			address: "23 Paris Road, CPT",
			role: "customer",
			isActive: true,
		},
		{
			email: "provider@email.com",
			password: hash,
			name: "Provider",
			userFiles: "https://res.cloudinary.com/demo/image/twitter/1330457336.jpg",
			about: "I am a service provider",
			address: "18 Durban Street, CPT",
			role: "provider",
			isActive: true,
		},
		{
			email: "admin@email.com",
			password: hash,
			name: "Admin",
			userFiles: "https://res.cloudinary.com/demo/image/twitter/1330457336.jpg",
			about: "I am an admin",
			address: "18 Durban Street, CPT",
			role: "admin",
			isActive: true,
		},
		{
			email: "doe@email.com",
			password: hash,
			firstName: "John",
			lastName: "Doe",
			image: "image.png",
			about: "I am a customer",
			address: "23 Paris Road, CPT",
			role: "customer",
		},
		{
			email: "cena@email.com",
			password: hash,
			firstName: "John",
			lastName: "Cena",
			image: "image.png",
			about: "I am a customer",
			address: "23 Paris Road, CPT",
			role: "customer",
		},
	]);
});
