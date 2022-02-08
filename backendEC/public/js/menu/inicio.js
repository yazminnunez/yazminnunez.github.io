

    function renderCARDS(productos){
        fetch('vistas/inicio.hbs')
        .then(r => r.text())
        .then(plantilla => {
            var template = Handlebars.compile(plantilla);
            let html = template({ productos: productos });
            document.querySelector('.cards-container').innerHTML = html
        })

    }

        function AgregarAlCarrito(id)
        {
            console.log('AgregarAlCarrito',id)
            let producto = PRODUCTS_MODEL.Obtener(id)
            console.log(producto)
            CARRITO_CONTROLLER.AgregaralCarrito(producto)
        }


        async function initinicio()
        {
            console.log('initinicio')

            PRODUCTS_MODEL.Inicializar(await PRODUCTS_CONTROLLER.ObtenerProductos())
            let productos = PRODUCTS_MODEL.Obtener()
            
            renderCARDS(productos)
            let lg= productos.length

            document.querySelector('.section-cards__header p').innerHTML = lg? `Se encontraron los siguientes productos`:''

        }