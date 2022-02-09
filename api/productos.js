//import productosMODEL_MEM from "../model/productos-mem.js"
//import productosMODEL_FILE from "../model/productos-file.js"
//const model = new productosMODEL_MEM()
//const model = new productosMODEL_FILE()
//const model = new productosMODEL_MONGO()

import productosMODEL_MONGO from '../model/productos-mongodb.js'
import productoMODEL from '../model/productos.js'
import config from '../config.js'
const model = productoMODEL.get(config.tipo_persistencia)

const obtenerproductos = async () =>{
    let productos = await model.readproductos()
    return productos
}
const obtenerproducto = async id =>{
    let producto = await model.readproducto(id)
    return producto
}

const guardarproducto = async producto =>{
    let productoguardado = await model.createproductos(producto)
    return productoguardado
}

const actualizarproducto = async (id,producto) =>{
    let productoactualizado = await model.updateproducto(id,producto)
    return productoactualizado 
}

const borrarproducto = async id =>{
    let productoborrado = await model.deleteproducto(id)
    return productoborrado
}

export default {
    obtenerproducto,
    obtenerproductos,
    guardarproducto,
    actualizarproducto,
    borrarproducto
}