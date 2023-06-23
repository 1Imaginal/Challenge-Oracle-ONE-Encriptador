function encriptar() {
    let texto = document.getElementById("input").value;
    let output_texto = document.getElementById("output")
    texto = texto + "uwu"
    output_texto.innerHTML = texto;
}

function desencriptar() {
    let texto = document.getElementById("input").value;
    let output_texto = document.getElementById("output")
    texto = texto - "uwu"
    output_texto.innerHTML = texto;
}