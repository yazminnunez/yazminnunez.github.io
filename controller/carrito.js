import mercadopago from "mercadopago"
import config from "../config.js"
import apiservicios from "../api/carrito.js";

const postcarrito = async (req, res) => {
    let carrito = req.body;
    let carritoguardado = await apiservicios.guardarcarrito(carrito);

    let items = []

    for(let item of carritoguardado){
        items.push({
				title: item.nombre,
				unit_price: Number (item.precio),
				quantity: Number (item.cantidad),
        })
    }

    // Crea un objeto de preferencia
    let preference = {
		items: items,
		back_urls: {
			"success": `http://localhost:${config.port}/api/carrito/feedback`,
			"failure": `http://localhost:${config.port}/api/carrito/feedback`,
			"pending": `http://localhost:${config.port}/api/carrito/feedback`
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id, items
			});
		}).catch(function (error) {
			console.log(error);
		});

    
};

export default {
    postcarrito,
};
