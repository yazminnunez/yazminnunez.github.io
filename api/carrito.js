import config from '../config.js'
import carritoMODEL from '../model/carrito.js'

const model = carritoMODEL.get(config.tipo_persistencia)

const guardarcarrito = async carrito =>{
    let carritoguardado = await model.createcarrito(carrito)
    return carritoguardado
}

export default {
    guardarcarrito
}