var mostrarResumen = function() {
    var precio = 200;
    var cantidad = document.getElementById('inputCantidad');
    var categoria = document.getElementById('inputCategoria');
    var error = '';
    if(cantidad.value == '') {
        error = 'Ingrese una cantidad';
    } else if(cantidad.value < 1) {
        error = 'Debe ingresar al menos una entrada';
    }

    var descuento = 0;
    var total = precio;
    if(error != '') {
        alert(error)
    } else {
        switch(parseInt(categoria.value)) {
            case 1:
                descuento = 80;
            break;
            case 2:
                descuento = 50;
            break;
            case 3:
                descuento = 15;
            break;
            default:
            break;
        }

        total = precio * parseInt(cantidad.value) - (precio * (descuento / 100)) * parseInt(cantidad.value);

        document.getElementById("montoTotal").innerHTML = '$'+ total;
    }
}

var borrarResumen = function() {
    document.getElementById("montoTotal").innerHTML = '';
}