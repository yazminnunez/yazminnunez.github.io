//const { json } = require('express/lib/response')
import fs from 'fs'

function getNextId(productos) {
    let id = 1
    try { id = Number(productos[productos.length-1].id) + 1 }
    catch {}

    return id.toString()
}

function getIndex(productos, id) {
    return productos.findIndex( prod => prod.id === id )
}
const nombrearchivo = 'productos.dat'



async function leerarchivo() {
    try
    {
    let productos = JSON.parse(await fs.promises.readFile(nombrearchivo,'utf-8'))
    return productos
    }
    catch (error)
    {
    console.log(error.message)
    return []
    }
}

async function guardararchivo(productos) 
{
    await fs.promises.writeFile(nombrearchivo,JSON.stringify(productos, null,'\t'))
}




const createproductos = async producto => {
    let productos = await leerarchivo()
    producto.id = getNextId(productos)
    productos.push(producto)
    await guardararchivo(productos)
    return producto
}

const readproducto =async  id =>{
    let productos = await leerarchivo()
    let index = getIndex(productos,id)
    let producto = productos[index] || {} 
    return producto
}

const readproductos = async () =>{
    let productos = await leerarchivo()
    return productos
}

const updateproducto = async (id,producto) =>{
    let productos = await leerarchivo()
    producto.id = id
    let index = getIndex(productos,id)
    productos.splice(index,1,producto)
    await guardararchivo(productos)
    return producto
}

const deleteproducto = async  id =>{
    let productos = await leerarchivo()
    let index = getIndex(productos,id)
    let producto = productos.splice(index,1)[0]
    await guardararchivo(productos)

    return producto
}







export default {
    createproductos,
    readproducto,
    readproductos,
    updateproducto,
    deleteproducto
}