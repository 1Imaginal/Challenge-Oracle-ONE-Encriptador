function encriptar() {
    let texto = document.getElementById("input").value;
    const key = new Map();
    key.set('e', 'nter')
    key.set('i', 'mes')
    key.set('a', 'i')
    key.set('o', 'ber')
    key.set('u', 'fat')
    num_caracteres = texto.length
    texto_encriptado = texto;
    let caracteres_agregados = 0;
    for (let i = 0; i < num_caracteres; i++) {
        if (key.has(texto[i])) {
            caracteres_agregados += key.get(texto[i]).length;
            texto_encriptado = texto_encriptado.slice(0,i + caracteres_agregados) + key.get(texto[i]) + texto.slice(i + caracteres_agregados);
            console.log(texto_encriptado);
        }
    }
    let output_texto = document.getElementById("output")
    output_texto.innerHTML = texto_encriptado;
}

function desencriptar() {
    let texto = document.getElementById("input").value;
    let output_texto = document.getElementById("output")
    texto = texto - "uwu"
    output_texto.innerHTML = texto;
}