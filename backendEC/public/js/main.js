
function ajax(url, metodo) {
    let xhr = new XMLHttpRequest
    xhr.open(metodo||'get',url)  
    xhr.send()
    return xhr
}

function getNombreArchivo(id) {
    return 'plantillas/' + id + '.html'
}

function marcarLink(id) {
    let links = document.querySelectorAll('a')
    links.forEach( link => {
        if(link.id == id) {
            link.classList.add('active')
        }
        else {
            link.classList.remove('active')
        }
    })
}


function initJS(id){
switch(id){
    case    'inicio' : 
            initinicio()
            break

    case     'alta' : 
            initalta()
            break    
            
    case     'contacto' :
            initcontacto()
            break

    case     'nosotros' : 
            initnosotros()
            break

    default :
            initinicio()

    }
}

function cargarplantilla(id){
    let main = document.querySelector('main')
    let archivo = getNombreArchivo(id)
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status = 200) {
            main.innerHTML = xhr.response
            initJS(id)
        }
    })
}

function iniPlantillas() {
    let links = document.querySelectorAll('a')
    let id = location.hash.slice(1) || 'inicio'
    marcarLink(id)
    cargarplantilla(id)
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id
            console.log(id)
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {
        let id = location.hash.slice(1) || 'inicio'
        marcarLink(id)
        cargarplantilla(id)
    })
}

function start(){

    console.warn('start..')
    iniPlantillas()
}



start()