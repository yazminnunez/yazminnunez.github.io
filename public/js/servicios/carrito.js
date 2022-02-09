class CarritoService{

    URL_carrito = '/api/carrito/'//'https://61e6d10ace3a2d001735948a.mockapi.io/Carrito/'

    async GuardarCarrito(carrito){
        let CARRITO_GUARDADO= await http.post(this.URL_carrito,carrito)
        return CARRITO_GUARDADO
    }

}

const CARRITO_SERVICE = new CarritoService()