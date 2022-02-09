

class productosMODEL_MEM{

        productos = []

        getNextId() {
            let id = 1
            try { id = Number(this.productos[this.productos.length-1].id) + 1 }
            catch {}

            return id.toString()
        }

        getIndex(productos, id) {
            return productos.findIndex( prod => prod.id === id )
        }

        async createproductos (producto) {
            producto.id = this.getNextId()
            this.productos.push(producto)
            return producto
        }

        async readproducto (id) {
            let index = this.getIndex(this.productos,id)
            let producto = this.productos[index] || {} 
            return producto
        }

        async readproductos() {
            return this.productos
        }

        async updateproducto (id,producto) {
            producto.id = id
            let index = this.getIndex(this.productos,id)
            this.productos.splice(index,1,producto)
            return producto
        }

        async deleteproducto (id) {
            let index =this.getIndex(this.productos,id)
            let producto = this.productos.splice(index,1)[0]
            return producto
        }
}
export default productosMODEL_MEM