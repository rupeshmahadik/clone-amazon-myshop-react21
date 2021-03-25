import bcrypt from 'bcrypt'

const data = {
	users:[
	{
		name:'useradmin',
		email: 'useradmin@test.com',
		password: bcrypt.hashSync('12345',8),
		// password: 12345,
		isAdmin:true,
	},
	{
		name:'userone',
		email: 'userone@test.com',
		password: bcrypt.hashSync('12345',8),
		// password: 12345,
		isAdmin:false,
	},
	],
	products: [
	{
		name:'Nike Plane Shirt',
		category: 'Shirt',
		image: './images/p1.jpg',
		price: 120,
		brand: 'Nike',
		rating: 4.5,
		numReviews: 10,
		description: 'High Quality Product',
		countInStock: 10,
	},
	{
		name:'Polo New Shirt',
		category: 'Shirt',
		image: './images/p1.jpg',
		price: 250,
		brand: 'Polo',
		rating: 4.5,
		numReviews: 10,
		description: 'High Quality Product',
		countInStock: 0,
	},
	{
		name:'Adidas Shirt',
		category: 'Shirt',
		image: './images/p1.jpg',
		price: 120,
		brand: 'Nike',
		rating: 4.5,
		numReviews: 10,
		description: 'High Quality Product',
		countInStock: 10,
	},
	{
		name:'Prada Shirt',
		category: 'Shirt',
		image: './images/p1.jpg',
		price: 120,
		brand: 'Nike',
		rating: 4.5,
		numReviews: 10,
		description: 'High Quality Product',
		countInStock: 10,
	},
	{
		name:'Bench Shirt',
		category: 'Shirt',
		image: './images/p1.jpg',
		price: 120,
		brand: 'Nike',
		rating: 4.5,
		numReviews: 10,
		description: 'High Quality Product',
		countInStock: 10,
	},
	{
		name:'Elon Shirt',
		category: 'Shirt',
		image: './images/p1.jpg',
		price: 120,
		brand: 'Nike',
		rating: 4.5,
		numReviews: 10,
		description: 'High Quality Product',
		countInStock: 10,
	},
  ],
}

export default data;







