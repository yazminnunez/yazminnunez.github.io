const productos = []


function getNextId() {
    let id = 1
    try { id = Number(productos[productos.length-1].id) + 1 }
    catch {}

    return id.toString()
}

function getIndex(productos, id) {
    return productos.findIndex( prod => prod.id === id )
}

const createproductos = async producto => {
    producto.id = getNextId()
    productos.push(producto)
    return producto
}

const readproducto = async id =>{
    let index = getIndex(productos,id)
    let producto = productos[index] || {} 
    return producto
}

const readproductos = async () =>{
    return productos
}

const updateproducto = async (id,producto) =>{
    producto.id = id
    let index = getIndex(productos,id)
    productos.splice(index,1,producto)
    return producto
}

const deleteproducto = async id =>{
    let index = getIndex(productos,id)
    let producto = productos.splice(index,1)[0]
    return producto
}

export default {
    createproductos,
    readproducto,
    readproductos,
    updateproducto,
    deleteproducto
}