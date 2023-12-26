//Pagina de Pastas Congeladas x Tipo

function saludar() {
    let saludo = 'Welcome to ROCHINO';
    alert('Welcome to ROCHINO');
}
saludar();


let question = prompt('Desea seleccionar tipo de producto? \n(S-si / N-no)');

while (question == 'S') {
    let answer = prompt('1-Tradicional\n2-Sin T.A.C.C.\n');
    if (answer == '1') {
        alert('Elegio productos Tradicionales');
    } else if (answer == '2') {
        alert('Elijio Productos sin T.A.C.C.');
    } else {
        alert('Tipo de producto inexistente');
    }
    question = prompt('Desea cambiar el tipo de producto? (S-si / N-no)');
}
//==================================== Precios segun Producto elegido ===================================

let total = 0;

let pastas = prompt('Elija el producto:\n \n1 - Sorrentinos\n2 - Ravioles\n3 - Lasagna\n4 - Spaghettis\n\nB / para volver al menu');

while (pastas != 'B') {
    switch (pastas) {
        case '1':
            alert('Su producto elegido vale $160 + IVA');
            sumatoriaCompra(160);
            break;
        case '2':
            alert('Su producto elegido vale $140 + IVA');
            sumatoriaCompra(140);
            break;
        case '3':
            alert('Su producto elegido vale $110 + IVA');
            sumatoriaCompra(110);
            break;
        case '4':
            alert('Su producto elegido vale $200 + IVA');
            sumatoriaCompra(200);
            break;

        default:
            alert('Producto Inexistente');
            break;

    }
    pastas = prompt('Elija el producto :\n \n1 - Sorrentinos\n2 - Ravioles\n3 - Lasagna\n4 - Spaghettis\n\nB / para volver al menu');
}

alert('Total de su compra $' + total);

//================================ Total Compra ==========================================


function sumatoriaCompra(precio) {
    // Obtengo del IVA
    const iva = 0.21;

    // Calculo del IVA
    const ivaTotal = precio * iva;

    // Agrego el IVA al total
    total = total + precio + ivaTotal;
    
    // Muestro el resultado

    alert('Lleva gastado $' + total);
}