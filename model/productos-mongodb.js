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
    let productos =  await PRODUCTOMODEL.find({}).lean()
    let productoguardado = productos[productos.length-1]



    return DB_mongo.genIDkey(productoguardado)
    }
catch(error)
    {
        console.log(`error en createproductos : ${error.message}`)
        return {}
    }  
    
}

const readproducto = async id =>{
    if(!DB_mongo.conexionOK) return {}
    try{
        let producto =  await PRODUCTOMODEL.findOne({_id:id}).lean()
        return DB_mongo.genIDkey(producto)
        }
    catch(error)
        {
            console.log(`error en readproducto : ${error.message}`)
            return {}
        } 
}

const readproductos = async () =>{
    if(!DB_mongo.conexionOK) return {}
    try{
        let productos =  await PRODUCTOMODEL.find({}).lean()
        return DB_mongo.genIDkey(productos)
        }
    catch(error)
        {
            console.log(`error en readproductos : ${error.message}`)
            return {}
        } 
}

const updateproducto = async (id,producto) =>{
    if(!DB_mongo.conexionOK) return {}
    try{
    await PRODUCTOMODEL.updateOne({_id:id},{$set:producto})
    let productoactualizado =  await PRODUCTOMODEL.findOne({_id:id}).lean()
    return DB_mongo.genIDkey(productoactualizado) 
    }
    catch (error){
        console.log(`error en updateproducto : ${error.message}`)
        return {}
    }
}

const deleteproducto = async id =>{
    if(!DB_mongo.conexionOK) return {}
    try{
    let productoborrado =  await PRODUCTOMODEL.findOne({_id:id}).lean()
    await PRODUCTOMODEL.deleteOne({_id:id})
    return DB_mongo.genIDkey(productoborrado) 
    }
    catch (error)
    {
    console.log(`error en deleteproducto : ${error.message}`)
    return {}
    }

}

export default {
    createproductos,
    readproducto,
    readproductos,
    updateproducto,
    deleteproducto
}