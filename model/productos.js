import productosMODEL_FILE from "./productos-file.js"
import productosMODEL_MEM from "./productos-mem.js"
import productosMODEL_MONGO from "./productos-mongodb.js"


class productoMODEL{

    static get(tipo){
        switch(tipo){
            case 'MEM':
                console.log(`persistencia en memoria (productos)`)
                return new productosMODEL_MEM()

            case 'FILE':
                console.log(`persistencia en archivos-file system- (productos)`)
                return new productosMODEL_FILE()

            case 'MONGODB':
                console.log(`persistencia en mongo (productos)`)
                return new productosMODEL_MONGO()

            default:
                console.log(`persistencia default (productos)`)
                return new productosMODEL_MONGO()
            }
    }
}

export default productoMODEL