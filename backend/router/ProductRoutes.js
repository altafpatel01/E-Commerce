const express =require('express')
const router = express.Router()
const {getProduct, getAllProducts} = require('../controllers/ProductControllers') 
const { createProduct } = require('../controllers/ProductControllers')

router.get('/product/:id',getProduct)
router.get('/products', getAllProducts)
router.post('/products/new', createProduct)

module.exports = router