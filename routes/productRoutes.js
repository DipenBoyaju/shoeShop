import express from 'express'
import { addProduct, getAllProduct, getProductById } from '../controller/productController.js';

const router = express.Router()

router.route('/').get(getAllProduct).post(addProduct)
router.route('/:id').get(getProductById)

export default router;