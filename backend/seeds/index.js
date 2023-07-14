const sequelize = require("../config/config");
const { User, Request } = require("../models");
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

	await Request.bulkCreate([
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426647/photo_basin_mmlsnv.jpg",
			serviceType: "plumbing",
			title: "Leaking Bathroom Basin Pipe",
			description:
				"The basin pipe in my bathroom is leaking. It seems to have disconnected itself and quite a bit of water that drips out (a 5 litre bottle per day). I would therefore need the entire unit checked for any faultiness.",
			location: "Claremont",
			serviceDate: "2023-07-18",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426647/photo_installpipe_aigjkj.webp",
			serviceType: "plumbing",
			title: "Need new PEX pipe installed for toilet",
			description:
				"My current PEX pipe seems to be damaged. There are unidentified leaks that is causing flooding within my bathroom. I would need new piping installed to ensure the leaks stop.",
			location: "Rondebosch",
			serviceDate: "2023-07-25",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426648/photo_alien_agbiwr.jpg",
			serviceType: "gardening",
			title: "Need alien trees removed",
			description:
				"I have noticed an unusual growth of small alien trees in my garden that seems to be interfering with my other plants. I need these two trees removed before they grow bigger and becomes more difficult to remove.",
			location: "Mowbray",
			serviceDate: "2023-07-19",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426647/photo_alumwindow_xxw4yu.jpg",
			serviceType: "carpentry",
			title: "Aluminium window & slideing door install",
			description:
				"I have a 3-bedroom house with 2 bathrooms, a lounge, kitchen, study, and dining room. I need aluminium open pane windows installed in all these rooms. I will supply the frames.",
			location: "Gardens",
			serviceDate: "2023-07-20",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426647/photo_fixtap_oehjzp.jpg",
			serviceType: "plumbing",
			title: "Water flowing after closing tap",
			description:
				"The tap in my main bedroom sink is damaged and the water continues to flow out at a steady rate even when the tap is closed tightly.",
			location: "Mowbray",
			serviceDate: "2023-08-01",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426648/photo_weedremove_r0bsnm.jpg",
			serviceType: "gardening",
			title: "Garden Maintenance and weed removal",
			description:
				"I have a garden that is around 40 square meters that needs weekly maintenance.",
			location: "Rosebank",
			serviceDate: "2023-07-22",
			visible: true,
			serviceComplete: false,
			price: 100,
		},

		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426647/photo_installbulb_jihlwe.jpg",
			serviceType: "repairs",
			title: "Replace bathroom light fixture",
			description:
				"The light in the bathroom started flickering sometimes during use since last week. The light will not switch on even after the bulb change so I assume either the wires or the light fixture is broken.",
			location: "Newlands",
			serviceDate: "2023-07-16",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426648/photo_tvset_mdhg9f.jpg",
			serviceType: "carpentry",
			title: "Need a new TV set",
			description:
				"Recently moved into a new house and looking for a new TV set to go with my new TV. The room is roughly 30 square meters. I would like a black-wooden set to compliment the colour of the room.",
			location: "Claremont",
			serviceDate: "2023-07-20",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426649/photo_weakpressure_hmmnsb.jpg",
			serviceType: "plumbing",
			title: "Water pressure of my tap is weak",
			description:
				"The tap pressure in my kitchen is weak. The water flow is slow and I need an expert to have a look at the issue. I also request that the pipes around the house should be inspected in case there are any other issues.",
			location: "Newlands",
			serviceDate: "2023-07-27",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
		{
			UserId: 1,
			image:
				"https://res.cloudinary.com/dhrftaik2/image/upload/v1663426647/photo_newplants_ymlzyg.jpg",
			serviceType: "gardening",
			title: "Maintenance and new plants",
			description:
				"I have a garden of 36 square meters. I would like if someone could plant new rose seeds.",
			location: "Rondebosch",
			serviceDate: "2023-07-30",
			visible: true,
			serviceComplete: false,
			price: 100,
		},
	]);
});
