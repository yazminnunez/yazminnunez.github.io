import mongoose from 'mongoose'
import DB_mongo from '../model/DB_Mongo.js'

const prodESQUEMA = mongoose.Schema({
    categoria : String,
    nombre : String,
    tipo: String,
    genero : String,
    stock : Number,
    precio : Number,
    foto : String,
    detalles: String,
    envio: Boolean,
})
const PRODUCTOMODEL = mongoose.model('productos',prodESQUEMA)


const createproductos = async producto => {
    if(!DB_mongo.conexionOK) return {}
try{
    const productosave = new PRODUCTOMODEL(producto)
    await productosave.save()
    return producto
    }
catch(error)
    {
        console.log('error en create productos: ')
        return []
    }  
    
}

const readproducto = async id =>{
    if(!DB_mongo.conexionOK) return {}
    return []
}

const readproductos = async () =>{
    if(!DB_mongo.conexionOK) return []
    return []
}

const updateproducto = async (id,producto) =>{
    if(!DB_mongo.conexionOK) return {}
    producto.id = id

    return producto
}

const deleteproducto = async id =>{
    if(!DB_mongo.conexionOK) return {}
    return []
}

export default {
    createproductos,
    readproducto,
    readproductos,
    updateproducto,
    deleteproducto
}