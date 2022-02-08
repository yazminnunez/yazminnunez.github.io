class productsServices{

    URL = '/api/productos/'
    
    async ObtenerProductos(){
        let PRODUCTOS = await http.get(this.URL)
        return PRODUCTOS
    }

    async GuardarProducto(producto){
        let PRODUCTO_GUARDADO= await http.post(this.URL,producto)
        return PRODUCTO_GUARDADO
    }

    async ActualizaProducto(id,producto){
        let ProductoActualizado = await http.put(this.URL,id,producto)
        return ProductoActualizado
    }

    async BorrarProducto(id){
    let ProductoBorrado = await http.delete(this.URL,id)
    return ProductoBorrado
    }

}

const PRODUCTS_SERVICES= new productsServices()