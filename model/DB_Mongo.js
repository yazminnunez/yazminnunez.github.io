import mongoose from 'mongoose'

//const STR_CNX ='mongodb://localhost/ecommerce'
const STR_CNX ='mongodb+srv://jazminsORG:O12R34Gorg@cluster0.jsxov.mongodb.net/ecommerce?retryWrites=true&w=majority'

class DB_mongo{

    static conexionOK = false

    static genIDkey(obj){
        if(Array.isArray(obj)){
        for(let i=0;i<obj.length;i++){
            obj[i].id = obj[i]._id
        }
        }
        else{
            obj.id = obj._id
        }
        return obj
    }




    static async conectarDB(){
        try{ 
                if(!DB_mongo.conexionOK){
                    await  mongoose.connect(STR_CNX,{
                        useNewUrlParser : true,
                        useUnifiedTopology : true
                    })
                    console.log('db conectada')
                    DB_mongo.conexionOK = true
                }
            }
        catch(error){
            console.log(`error  de ldb al conectar ${error.message}`)
        }

    }
}

export default DB_mongo