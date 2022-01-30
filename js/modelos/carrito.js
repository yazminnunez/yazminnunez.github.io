class CarritoModel{
    carrito = []

    Inicializar(productos){

        this.carrito= productos
    }


    Obtener(id){
        if(id){
        let producto = this.carrito.find(producto => producto.id ==id)
        return producto
        }
        else{
            return this.carrito 
        }
        
    }

    productoexiste(producto){
        return this.carrito.filter(prod => prod.id == producto.id).length
    }

ObtenerProducto(producto){
        return this.carrito.find(prod => prod.id == producto.id)
}

Guardar(producto){
    this.carrito.push(producto) 
}
Actualizar(id,producto){
    let index=  this.carrito.findIndex(prod => prod.id == id)
        this.carrito.splice(index,1,producto) 
}
Borrar(id){
    let index=  this.carrito.findIndex(prod => prod.id == id)
    this.carrito.splice(index,1) 
}

}

const CARRITO_MODEL= new CarritoModel()