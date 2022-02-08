import mongoose from 'mongoose'

const prodESQUEMA = mongoose.Schema({
    nombre : String,
    precio : Number,
    stock : Number,
    
})

const createproductos = async producto => {

    return producto
}

const readproducto = async id =>{

    return []
}

const readproductos = async () =>{
    return []
}

const updateproducto = async (id,producto) =>{
    producto.id = id

    return producto
}

const deleteproducto = async id =>{

    return []
}

export default {
    createproductos,
    readproducto,
    readproductos,
    updateproducto,
    deleteproducto
}