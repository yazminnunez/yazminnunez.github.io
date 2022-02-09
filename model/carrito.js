
import carritoMODEL_MONGO from "./carrito-mongodb.js"


class carritoMODEL{

    static get(tipo){
        switch(tipo){

            case 'MONGODB':
                console.log(`persistencia en mongo (carrito)`)
                return new carritoMODEL_MONGO()

            default:
                console.log(`persistencia default (carrito)`)
                return new carritoMODEL_MONGO()
            }
    }
}

export default carritoMODEL