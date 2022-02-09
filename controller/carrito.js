
import apiservicios from '../api/carrito.js'

const postcarrito = async (req,res) => {
    let carrito = req.body
    let carritoguardado = await apiservicios.guardarcarrito(carrito)
    res.json(carritoguardado)
}

export default {
    postcarrito
}