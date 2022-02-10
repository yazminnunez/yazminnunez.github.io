const { status } = require("express/lib/response")

let productos = null
let inputs = null
let form = null
let button = null
let droparea = null
let progressbar = null
let URLimagensubida =''

    const regExpValidar = [
        /^.+$/,
        /^.+$/,
        /^.+$/,
        /^[0-9]+$/,
        /^[0-9]+$/,
        /^.+$/
    ]

    let camposvalidos = [
        false,
        false,
        false,
        false,
        false,
        false
    ]

    const AlguncampoNOvalido = () =>{
        let valido = 
        camposvalidos[0] &
        camposvalidos[1] &
        camposvalidos[2] &
        camposvalidos[3] &
        camposvalidos[4] &
        camposvalidos[5] 
        return !valido
    }


const setcustomvalidity = function (mensaje,index){
        const errordivs= document.getElementsByClassName("error-detail")
        errordivs[index].innerHTML= mensaje
        errordivs[index].parentNode.classList.toggle('input-group__error',!! mensaje)
}

function validar(valor,validador,index){
    if(!validador.test(valor)){
        setcustomvalidity("Este campo no es valido",index)
        camposvalidos[index] = false
        button.disabled= true
        return null
    }
    camposvalidos[index] = true
    button.disabled= AlguncampoNOvalido()
    setcustomvalidity('',index)
    return valor
}


function renderProds(productos){
    fetch('vistas/alta.hbs')
    .then(r => r.text())
    .then(plantilla => {
        var template = Handlebars.compile(plantilla);
        let html = template({ productos: productos });
        document.querySelector('.listado_productos').innerHTML = html
    })

}

function LeerProductoIngresado(){
    let categoria = document.getElementById("categoria")
    return { 
        categoria:categoria.value || "Default",
        nombre:inputs[0].value,
        tipo:inputs[1].value,
        genero:inputs[2].value,
        stock:inputs[3].value,
        precio:inputs[4].value,
        foto:'',
       // foto:inputs[5].value,
        detalles:inputs[5].value,
        envio: inputs[6].checked,
    }
}

function LimpiarFormulario(){
    inputs.forEach(input => { 
        if (input.type=='checkbox'){
            input.checked =false
        }
        else{
            input.value=""
        }        
    })

    button.disabled = true
    for(let i=0;i<camposvalidos.length;i++){
        camposvalidos[i]=false
    }
}

function previewfile(file){
    let reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function (){
        let img =document.querySelector('#gallery img')
        img.src = reader.result
    }

}




    function handlefiles(files){
    let file = files[0]
    previewfile(file)
    uploadfiles(file)
    }

    function uploadfiles(file){
    var url ='/upload'
    var xhr = new XMLHttpRequest()
    xhr.open('POST',url)

    xhr.addEventListener('load',() =>{
        if(xhr,status == 200){
           //URLimagensubida
        }

    })

    var formdata = new FormData()
    formdata.append('foto',file)
    xhr.send(formdata)



    }







    async function initalta(){
    console.log('initalta')
    inputs =document.querySelectorAll('.product-container__form .input-group input')
    form = document.querySelector('.product-container__form')
    button = document.querySelector('button')
    button.disabled= true

    PRODUCTS_MODEL.Inicializar(await PRODUCTS_CONTROLLER.ObtenerProductos())
    renderProds(PRODUCTS_MODEL.Obtener())
        inputs.forEach((input,index )=>{
            if (input.type !='checkbox' )
                    {
                        input.addEventListener('input',()=>{
                            validar(input.value,regExpValidar[index],index)
                        })
                    }
        })

    form.addEventListener('submit',async e=>{
        e.preventDefault()
        let producto =LeerProductoIngresado()
        LimpiarFormulario()
        await PRODUCTS_CONTROLLER.GuardarProducto(producto)
    })

    droparea = document.getElementById('drop-area')
    progressbar = document.getElementById('progresss-bar')




    ;['dragenter','dragover','dragleave','drop'].forEach(eventName =>{
        droparea.addEventListener(eventName, e => e.preventDefault())
        document.body.addEventListener(eventName, e => e.preventDefault())
    
    })
    ;['dragenter','dragover'].forEach(eventName =>{
        droparea.addEventListener(eventName,() => {
        droparea.classList.add('highlight')
        })
    })
    ;['dragleave','drop'].forEach(eventName =>{
        droparea.addEventListener(eventName,() => {
            droparea.classList.remove('highlight')
        })
    })

    droparea.addEventListener('drop',e =>{
        var dt = e.dataTransfer
        var files = dt.files
        handlefiles(files)
    })



}