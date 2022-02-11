const mercadopago = new MercadoPago(
    "APP_USR-6ae78d6c-28f3-4ca1-a226-283fb28c5210",
    {
        locale: "es-AR",
    }
);

async function renderPAGOS(preference) {
    let html = await fetch("plantillas/pago.html").then((r) => r.text());

    document.querySelector("main").style.display = "none";
    document.querySelector(".section_pago").innerHTML = html;

    createCheckoutButton(preference.id);
    const items = preference.items;
    const refITEMS = document.querySelector('.item')
    const refTOTAL = document.querySelector('#summary-total')
    let total = 0


    for (let i = 0; i < items.length; i++) {
        let price = items[i].unit_price
        let quantity = items[i].quantity
        let title = items[i].title
        let subtotal = price * quantity
        total += subtotal

        refITEMS.innerHTML +=
        `<span class="price" class="summary-price">$ ${subtotal}</span>
        <p class="item-name">${title} x <span class="summary-quantity">${quantity}</span></p>`;
    }
    refTOTAL.innerHTML = '$'+ total

    document.getElementById("go-back").addEventListener("click", function () {
        document.querySelector(".section_pago").innerHTML = "";
        document.querySelector("main").style.display = "block";
    });
}

function createCheckoutButton(preferenceId) {
    mercadopago.checkout({
        preference: {
            id: preferenceId,
        },
        render: {
            container: "#button-checkout", 
            label: "Pagar", 
        },
    });
}
