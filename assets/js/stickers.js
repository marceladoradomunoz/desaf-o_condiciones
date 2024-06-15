
/* Creación de la función y declaración de las variables a utilizar */
function fnQuantityStickers() {
    let numStickers1 = Number(document.getElementById('numStickers1').value);
    let numStickers2 = Number(document.getElementById('numStickers2').value);
    let numStickers3 = Number(document.getElementById('numStickers3').value);
    let quantityStickers = numStickers1 + numStickers2 + numStickers3;
    let messageStickers = document.getElementById('idmessageStickers');


    /*Verificación existencia de datos NaN */
    if (isNaN(numStickers1) || isNaN(numStickers2) || isNaN(numStickers3)) {
        messageStickers.textContent = 'Por favor ingresa solo números válidos para los stickers';
        return;
    }

    /*Límite de stickers a comprar */
    if (quantityStickers > 10) {
        messageStickers.textContent = 'Llevas demasiados stickers';
    } else {
        messageStickers.textContent = `Llevas ${quantityStickers} stickers`;
    }
}

/*Limitación del número de stickers por etiqueta input de 1 a 10*/
let inputStickers = document.getElementById('numStickers');

inputStickers.addEventListener('change', function() {
    let value = parseInt(this.value);

    if (value < 0) {
        this.value = 0;
    } else if (value > 10) {
        this.value = 10;
    }
});
