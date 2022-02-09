//const express = require('express')
//const routerproductos = require('./router/productos')
import routerproductos from './router/productos.js'
import express from 'express'
import DB_mongo from './model/DB_Mongo.js'

import config from './config.js'

if(config.tipo_persistencia == 'MONGODB')
    {
            DB_mongo.conectarDB()
    }
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', routerproductos)

const PORT = config.port
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`) )
