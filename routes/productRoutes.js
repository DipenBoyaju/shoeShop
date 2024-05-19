import express from 'express'
import { getAllProduct } from '../controller/productController.js'

const router = express.Router()

router.route('/products', getAllProduct)

export default router