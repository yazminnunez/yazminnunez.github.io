let mostrarcarrito = false

async function renderCARRITO(carrito){
    let plantilla = await fetch('vistas/carrito.hbs').then(r => r.text())
        var template = Handlebars.compile(plantilla);
        let html = template({ carrito:carrito });
        document.querySelector('.section_carrito').innerHTML = html
}


function initcarrito(){

    let btncarrito= document.querySelector('.search-bar__shopping-container')
    let elemsectioncarrito= document.querySelector('.section_carrito')
    btncarrito.addEventListener('click',async ()=>{
        mostrarcarrito = !mostrarcarrito 
        if(mostrarcarrito){
        await renderCARRITO(CARRITO_MODEL.Obtener())
        elemsectioncarrito.classList.add('section_carrito--visible')
        }
        else{
            elemsectioncarrito.classList.remove('section_carrito--visible')
        }
    })
}


initcarrito()