import express from 'express'
const router= express.Router()
import { getProducts, getProductsById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts, getCategoryProducts,} from '../controllers/productController.js'
import {protect, admin} from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductsById).delete(protect, admin, deleteProduct).put(protect,admin,updateProduct).get(getCategoryProducts)
router.route('/category/:id').get(getCategoryProducts)

export default router