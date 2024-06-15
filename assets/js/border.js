/* Declaración de las variables a utilizar */
const imgclick = document.querySelector('#bonsai');

imgclick.addEventListener('click', toggleBorder);

/* Creación de la función, declaración de variable y condiciones para ejecutarse */
function toggleBorder() {
let borderStyle = this.style.border;

    if (borderStyle === '2px solid red') {
        this.style.border = '';
    } else {
        this.style.border = '2px solid red';
    }
}