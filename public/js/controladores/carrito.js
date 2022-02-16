class CarritoController{

    constructor(){
        try{
            CARRITO_MODEL.Inicializar(JSON.parse(localStorage.getItem('carrito')) || [])
        }
        catch{
            CARRITO_MODEL.Inicializar([])
            localStorage.setItem('carrito',CARRITO_MODEL.Obtener())
        }
    }

    
AgregaralCarrito(producto){

    if(!CARRITO_MODEL.productoexiste(producto))
    {
        producto.cantidad = 1
        CARRITO_MODEL.Guardar(producto)
    }
    else{
        let productodeCarrito = CARRITO_MODEL.ObtenerProducto(producto)
        productodeCarrito.cantidad++
    }
    localStorage.setItem('carrito',JSON.stringify(CARRITO_MODEL.Obtener()))

}

    async borrarProducto(id){
    console.log('borrar producto', id)
    CARRITO_MODEL.Borrar(id)
    localStorage.setItem('carrito',JSON.stringify(CARRITO_MODEL.Obtener()))
    await renderCARRITO(CARRITO_MODEL.Obtener())
}
async EnviarCarrito(){
    let elemsectioncarrito= document.querySelector('.section_carrito')
    elemsectioncarrito.innerHTML='<h2> Enviando carrito.. <h2>'
    let preference = await CARRITO_SERVICE.GuardarCarrito(CARRITO_MODEL.Obtener())
    console.log(preference)
    elemsectioncarrito.innerHTML='<h2><br> Carrito enviado!!</br> </h2>'
    CARRITO_MODEL.Inicializar([])
    localStorage.setItem('carrito',CARRITO_MODEL.Obtener())
    setTimeout( async ()=>{
        elemsectioncarrito.classList.remove('section_carrito--visible')
        mostrarcarrito= false 
        await renderPAGOS(preference)
    },0)
}
    Cerrar(){ 
    let elemsectioncarrito = document.querySelector('.section_carrito')      
    elemsectioncarrito.classList.remove('section_carrito--visible')
    mostrarcarrito = false 
    }



}

const CARRITO_CONTROLLER = new CarritoController()