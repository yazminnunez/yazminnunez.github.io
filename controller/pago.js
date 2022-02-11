// SDK de Mercado Pago
import mercadopago from "mercadopago"
// Agrega credenciales
mercadopago.configure({
    access_token: "APP_USR-2781998623948841-021110-f08bff48c0d1abfec8ee1de86d083499-153874551",
});


const feedback = (req, res) => {
	let info = {
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	}
    console.log(info)


    res.redirect('/')
}



export default{
    feedback 
}