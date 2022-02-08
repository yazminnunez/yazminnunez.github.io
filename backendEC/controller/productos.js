import apiservicios from "../api/productos.js"


const  getproductos = async (req,res) => {
    let id = req.params.id
    if(id) {
        let id = req.params.id
        let producto = await apiservicios.obtenerproducto(id)
        res.json(producto)
    }
    else {
        let productos = await apiservicios.obtenerproductos()
        res.json(productos)
    }
}

const postproductos = async (req,res) => {
    let producto = req.body
    let productoguardado = await apiservicios.guardarproducto(producto)
    res.json(productoguardado)
}

const putproductos = async (req,res) => {
    let id = req.params.id
    let producto = req.body
    let productoactualizado = await apiservicios.actualizarproducto(id,producto)
    res.json(productoactualizado)
}

const deleteproductos = async (req,res) => {
    let id = req.params.id
    let productoborrado = await apiservicios.borrarproducto(id)
    res.json(productoborrado)
}





export default {
    getproductos,
    postproductos,
    putproductos,
    deleteproductos
}