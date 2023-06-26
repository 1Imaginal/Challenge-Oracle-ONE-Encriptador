const key = new Map();
key.set('e', 'nter');
key.set('i', 'mes');
key.set('a', 'i');
key.set('o', 'ber');
key.set('u', 'fat');

function encriptar() {
    let texto = document.getElementById("input").value;
    num_caracteres = texto.length;
    texto_encriptado = texto;
    let caracteres_agregados = 0;
    for (let i = 0; i < num_caracteres; i++) {
        if (key.has(texto[i])) {
            texto_encriptado = texto_encriptado.slice(0,i + caracteres_agregados + 1) + key.get(texto[i]) + texto.slice(i + 1);
            caracteres_agregados += key.get(texto[i]).length;
        }
    }
    let output_texto = document.getElementById("output")
    output_texto.innerHTML = texto_encriptado;
}

function desencriptar() {
    let texto = document.getElementById("input").value;
    texto_desencriptado = texto;
    num_caracteres = texto.length;
    let caracteres_agregados = 0;
    for (let i = 0; i < num_caracteres; i++){
        if (key.has(texto_desencriptado[i])) {
            caracteres_agregados += key.get(texto_desencriptado[i]).length;
            texto_desencriptado = texto_desencriptado.slice(0,i+1) + texto.slice(i + caracteres_agregados + 1);
        }
    }
    let output_texto = document.getElementById("output")
    output_texto.innerHTML = texto_desencriptado;
}