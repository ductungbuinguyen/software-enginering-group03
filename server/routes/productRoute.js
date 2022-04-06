const express = require('express')
const router = express.Router()
const products = require('../data/productData')


// @route GET api/products
// @desc Get products
// @access Public
router.get('/', async (req, res) => {
	try {
		const products = require('../data/productData')
		res.json({ success: true, products })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

module.exports = router

// okokok