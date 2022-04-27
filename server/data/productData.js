const products = [
	{
		name: 'Aspen',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/01.jpg',
		description: 'Bacon, Onion, Mushroom, Mozarella',
		shortDescription: 'Bacon, Onion, Mushroom ...',
		category: 'Pizzas',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: true,
	},
	{
		name: 'Bolognese',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/02.jpg',
		description: 'Ragu, Mozzarella',
		shortDescription: 'Ragu, Mozzarella',
		category: 'Pizzas',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: false,
	},
	{
		name: 'Castello',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/03.jpg',
		description: 'Bacon, Sausage, Jalapeno, Onion, Mozzarella',
		shortDescription: 'Bacon, Sausage, Jalapeno ...',
		category: 'Pizzas',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: true,
	},
	{
		name: 'Fitness',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/04.jpg',
		description: 'Tomato, Corn, Broccoli, Paprika, Feta Cheese, Mozzarella',
		shortDescription: 'Tomato, Corn, Broccoli ...',
		category: 'Pizzas',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: false,
	},
	{
		name: 'Caesar Salad',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/05.jpg',
		description: 'Lettuce, Grilled Chicken, Toasted Bread, Garlic Dressing',
		shortDescription: 'Lettuce, Grilled Chicken ...',
		category: 'Salads',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: false,
	},
	{
		name: 'Greek Salad',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/06.jpg',
		description: 'Tomato, Onion, Olives, Cucumber, Feta Cheese',
		shortDescription: 'Tomato, Onion, Olives ... ',
		category: 'Salads',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: false,
	},
	{
		name: 'Grilled Salmon',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/07.jpg',
		description: 'Salmon, Lime, Pasta',
		shortDescription: 'With lime and pasta ...',
		category: 'Vegetarian',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: true,
	},
	{
		name: 'Sushi',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/08.jpg',
		description: 'Sushi, Rice, Soy Sauce, Toasted Sesame Seeds',
		shortDescription: 'Rice, Soy Sauce ...',
		category: 'Vegetarian',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: false,
	},
	{
		name: 'Beef Burger',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/09.jpg',
		description: 'Beaf Meat, Bacon, Cucumber, Cheese, Caramelized Onion Jam',
		shortDescription: 'Bacon, Cucumber, Cheese ...',
		category: 'Burgers',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: true,
	},
	{
		name: 'Double Beef Burger',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/10.jpg',
		description:
			'Double Beaf Meat, Bacon, Cucumber, Cheese, Caramelized Onion Jam',
		shortDescription: 'Double Meat, Bacon, Cheese ... ',
		category: 'Burgers',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: false,
	},
	{
		name: 'Chicken Burger',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/11.jpg',
		description:
			'Chicken Meat, Double Cheese, Tomato, Cucumber, Parsley, Caramelized Onion Jam',
		shortDescription: 'Double Cheese, Tomato ... ',
		category: 'Burgers',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: true,
	},
	{
		name: 'Mexican Burger',
		image:
			'https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/12.jpg',
		description: 'Chicken Meat, Mexican Topping, Bacon, Onion, Cheese',
		shortDescription: 'Mexican Topping, Onion ... ',
		category: 'Burgers',
		pricePerSizes: [
			{ size: 'S', price: '80000' },
			{ size: 'M', price: '90000' },
			{ size: 'L', price: '100000' },
		],
		nutrition: {
			small: 300,
			medium: 550,
			large: 800,
		},
		isHot: true,
	},
];

module.exports = products;
