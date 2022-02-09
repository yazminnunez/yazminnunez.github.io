import mongoose from 'mongoose'
import DB_mongo from './DB_Mongo.js'

const carritoESQUEMA = mongoose.Schema({
    carrito : Array
})
const CARRITOMODEL = mongoose.model('carritos',carritoESQUEMA)


class carritoMODEL_MONGO{

            async createcarrito (carrito) {
                if(!DB_mongo.conexionOK) return {}
            try{
                const carritosave = new CARRITOMODEL({carrito:carrito})
                await carritosave.save()
                return carrito
                }
            catch(error)
                {
                    console.log(`error en createcarrito : ${error.message}`)
                    return {}
                }  
                
            }

}
export default carritoMODEL_MONGO