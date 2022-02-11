import express from 'express'
import controller from '../controller/carrito.js'
import pago from '../controller/pago.js'

const router = express.Router()

router.post('/',controller.postcarrito)

router.get('/feedback', pago.feedback);


export default router


