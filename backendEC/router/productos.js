import express from 'express'
import controller  from '../controller/productos.js'
const router = express.Router()


/* ------------------------ RUTAS GET -------------------------- */
router.get('/:id?',controller.getproductos)

/* ------------------------ RUTAS POST -------------------------- */
router.post('/',controller.postproductos)

/* ------------------------ RUTAS PUT -------------------------- */
router.put('/:id',controller.putproductos)

/* ------------------------ RUTAS DELETE -------------------------- */
router.delete('/:id',controller.deleteproductos)

export default router


