import dotenv from 'dotenv'

//dotenv.config()

dotenv.config({
  //  path:'miconfig.env'
    path: process.env.NODE_ENV +'.env'
})


export default{
    port:process.env.port || 8080,
    tipo_persistencia:process.env.tipo_p ||'MONGODB',
    STR_CNX:process.env.CNX ||'mongodb+srv://jazminsORG:O12R34Gorg@cluster0.jsxov.mongodb.net/ecommerce?retryWrites=true&w=majority',
    //const STR_CNX ='mongodb://localhost/ecommerce'
}