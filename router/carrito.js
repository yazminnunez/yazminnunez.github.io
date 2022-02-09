import express from 'express'
import controller from '../controller/carrito.js'
const router = express.Router()

router.post('/',controller.postcarrito)


export default router


