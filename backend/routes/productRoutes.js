import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

// @desc fetch all products
// @route GET /api/products 
// @acces Public

router.get('/', asyncHandler (async (req, res)=>{
    const products = await Product.find({})
    res.json(products)
}))

// @desc fetch single product
// @route GET /api/products/:id 
// @acces Public

router.get(
    '/:id', 
    asyncHandler ( async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.sendStatus(404)
        throw new Error ('product not found')
    }
}))

export default router