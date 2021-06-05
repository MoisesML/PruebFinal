import { Router } from "express";

import { getProduct, getProductById, createProducts, updateProductById, deleteProductById} from '../controllers/products.controller'
import { verifyToken, isModerador, isAdmin } from '../middlewares/authJwt'

const router = Router();

router.post('/', [verifyToken,isModerador], createProducts)
router.get('/', getProduct)
router.get('/:productId', getProductById)
router.put('/:productId', [verifyToken, isAdmin], updateProductById)
router.delete('/:productId', [verifyToken, isAdmin], deleteProductById)

export default router;