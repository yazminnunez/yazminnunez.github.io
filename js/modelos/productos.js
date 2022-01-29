class ProductosModel{
    productos = []

    Inicializar(productos){

        this.productos= productos
    }

    Obtener(id){
        if(id){
        let producto = this.productos.find(producto => producto.id ==id)
        return producto
        }
        else{
            return this.productos  
        }
        
    }

Guardar(producto){
    this.productos.push(producto) 
}
Actualizar(id,producto){
    let index=  this.productos.findIndex(prod => prod.id == id)
        this.productos.splice(index,1,producto) 
}
Borrar(id){
    let index=  this.productos.findIndex(prod => prod.id == id)
    this.productos.splice(index,1) 
}




}