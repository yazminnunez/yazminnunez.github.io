//const { json } = require('express/lib/response')
import fs from 'fs'

class productosMODEL_FILE{

    nombrearchivo = 'productos.dat'
        getNextId(productos) {
            let id = 1
            try { id = Number(productos[productos.length-1].id) + 1 }
            catch {}
            return id.toString()
        }

        getIndex(productos, id) {
            return productos.findIndex( prod => prod.id === id )
        }
        
        async leerarchivo() {
            try
            {
            let productos = JSON.parse(await fs.promises.readFile(this.nombrearchivo,'utf-8'))
            return productos
            }
            catch (error)
            {
            console.log(error.message)
            return []
            }
        }

        async guardararchivo(productos) 
        {
            await fs.promises.writeFile(this.nombrearchivo,JSON.stringify(productos, null,'\t'))
        }

        async createproductos(producto){
            let productos = await this.leerarchivo()
            producto.id = this.getNextId(productos)
            productos.push(producto)
            await this.guardararchivo(productos)
            return producto
        }

        async readproducto(id) {
            let productos = await this.leerarchivo()
            let index = this.getIndex(productos,id)
            let producto = productos[index] || {} 
            return producto
        }

        async readproductos (){
            let productos = await this.leerarchivo()
            return productos
        }

        async updateproducto (id,producto){
            let productos = await this.leerarchivo()
            producto.id = id
            let index = this.getIndex(productos,id)
            productos.splice(index,1,producto)
            await this.guardararchivo(productos)
            return producto
        }

        async deleteproducto (id) {
            let productos = await this.leerarchivo()
            let index = this.getIndex(productos,id)
            let producto = productos.splice(index,1)[0]
            await this.guardararchivo(productos)
            return producto
        }
    }

export default productosMODEL_FILE