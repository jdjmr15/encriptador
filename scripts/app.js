
const vocal = {a:'a', e:'e', i:'i', o:'o', u:'u'};
const llaves = {a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat"};


function encriptar() {

    let textoTemporal = '';
    let texto = document.getElementById('texto').value;
    for (let letra of texto.toLowerCase()) {
        textoTemporal += letra == vocal[letra] ? llaves[letra] : letra;
    }

    document.getElementById('texto3').innerHTML = textoTemporal;
    ocultar();
    limpiar();
    return;
}


function desencriptar() {
    let textoTemporal = '';
    let texto = document.getElementById('texto').value;
    for (let i = 0; i < texto.length; i++) {
        letra = texto[i];
        if (letra == vocal[letra] && texto.slice(i, i + (llaves[letra].length)) == llaves[letra]) {
            i += (llaves[letra].length - 1);
            letra = vocal[letra]
        } 

        textoTemporal += letra;
    }
    document.getElementById('texto3').innerHTML = textoTemporal;
    ocultar();
    limpiar();
    return;
}

function copiar() {
    let texto = document.getElementById('texto3').innerHTML;
    navigator.clipboard.writeText(texto);
    console.log("Copiado");
    return;
}

function limpiar() {
    document.getElementById('texto').value = '';
    return;
}

function ocultar () {
    document.getElementById('texto1').style.display  = 'none';
    document.getElementById('texto2').style.display  = 'none';
    document.getElementById('muneco').style.display  = 'none';
    document.getElementById('texto3').style.visibility = 'visible';
    document.getElementById('btn-copiar').style.visibility = 'visible';
}


function main () {
    document.getElementById('texto').value = '';
    document.getElementById('texto3').value = '';
    document.getElementById('texto3').style.visibility = 'hidden';
    document.getElementById('btn-copiar').style.visibility = 'hidden';
}


main();