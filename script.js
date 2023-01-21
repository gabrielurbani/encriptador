// Boton encriptar
document.getElementById("encriptar-boton").addEventListener("click", function () {
        const texto = document.querySelector("textarea").value;
        const textoEncriptado = encriptar(texto);
        // Muestra el texto Encriptado
        document.getElementById("texto-resultado").innerHTML = textoEncriptado;
        // quita la imagen y los textos para dejar lugar al teto encriptado y boton de copia
        document.querySelector(".munheco").style = "display : none";
        document.querySelector(".ningun-mensaje").style = "display :none";
        document.querySelector("#copiar").style = "display : block";
});

// Logica de encriptación
function encriptar(texto) {
        return texto.toLowerCase().replace(/e|i|a|o|u/g, function (match) {
                switch (match) {
                        case "e":
                                return "enter";
                        case "i":
                                return "imes";
                        case "a":
                                return "ai";
                        case "o":
                                return "ober";
                        case "u":
                                return "ufat";
                        default:
                                return "";
                }
        });
}

// Boton Desencriptar
document.getElementById("desencriptar-boton").addEventListener("click", function () {
        const texto = document.querySelector("textarea").value;
        const textoDesencriptado = desencriptar(texto);
        // Muestra el texto Encriptado
        document.getElementById("texto-resultado").innerHTML = textoDesencriptado;
        // quita la imagen y los textos para dejar lugar al teto encriptado y boton de copia
        document.querySelector(".munheco").style = "display : none";
        document.querySelector(".ningun-mensaje").style = "display :none";
        document.querySelector("#copiar").style = "display : block";
});

// Logica de Desencriptación
function desencriptar(texto) {
        return texto.toLowerCase().replace(/enter|imes|ai|ober|ufat/g, function (match) {
                switch (match) {
                        case "enter":
                                return "e";
                        case "imes":
                                return "i";
                        case "ai":
                                return "a";
                        case "ober":
                                return "o";
                        case "ufat":
                                return "u";
                        default:
                                return "";
                }
        });
}

// Boton Copiar
function copiarTexto() {
        // Lee el texto 
        let texto = document.getElementById("texto-resultado").innerHTML;
       
        // Lo copia al clipboard
        navigator.clipboard.writeText(texto);

        // Lo pega directo en el textarea
        document.getElementById("texto-seleccionado").value = texto;
              

}
