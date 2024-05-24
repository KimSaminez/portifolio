var texto = "Kimberly Saminez";
var textoElemento = document.querySelector(".titulo_destaque");
var atraso = 200;

var contadorDeLetras = 0;

function escreverTexto() {
    if (contadorDeLetras < texto.length) {
        textoElemento.textContent += texto.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(escreverTexto, atraso);
    }

}
escreverTexto();
