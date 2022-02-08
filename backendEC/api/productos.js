//import model from "../model/productos-mem"
//import model from "../model/productos-file.js"
import model from '../model/productos-mongodb.js'


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