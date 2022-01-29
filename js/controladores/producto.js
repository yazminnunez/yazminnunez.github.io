class productsController{

    
    async ObtenerProductos(){
        let Productos = await PRODUCTS_SERVICES.ObtenerProductos()
        return Productos
    }

    async GuardarProducto(producto){
        let Producto_guardado= await PRODUCTS_SERVICES.GuardarProducto(producto) 
        PRODUCTS_MODEL.Guardar(Producto_guardado)
        renderProds(PRODUCTS_MODEL.Obtener())
        return Producto_guardado
    }

    async ActualizaProducto(id){
        let producto =  LeerProductoIngresado()  
        LimpiarFormulario()
        let ProductoActualizado= await PRODUCTS_SERVICES.ActualizaProducto(id,producto)
        PRODUCTS_MODEL.Actualizar(id,ProductoActualizado)
        renderProds(PRODUCTS_MODEL.productos)
        return ProductoActualizado
    }

    async BorrarProducto(id){
        let ProductoBorrado = await PRODUCTS_SERVICES.BorrarProducto(id)
        PRODUCTS_MODEL.Borrar(id)
        renderProds(PRODUCTS_MODEL.Obtener())
        return ProductoBorrado
    }

}

const PRODUCTS_CONTROLLER= new productsController()