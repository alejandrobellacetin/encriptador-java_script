const inputTexto = document.querySelector(".texto-entrada");
const outputTexto = document.querySelector(".texto-salida");
const muneco = document.querySelector(".muñeco");
const aviso = document.querySelector(".texto-aviso");
const infoTexto = document.querySelector(".texto");

function validar(texto) 
{
    const regex = /[^a-z0-9\s]/;
    return regex.test(texto);
}

function encriptar() 
{
    let texto = inputTexto.value;

    if(validar(texto) == true) 
    {
        alert("El texto contiene mayúsculas, acentos o caracteres especiales. No se puede encriptar.");
        return;
    }

    const reglas = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (let i = 0; i < reglas.length; i++) 
    {
        texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
    }

    outputTexto.textContent = texto;
    outputTexto.style.color = "#FFFFFF";
    muneco.style.display = "none";
    aviso.style.display = "none";
    infoTexto.style.display = "none";
    document.querySelector(".sin-input").classList.remove("ocultar");
}

function desencriptar() 
{
    let texto = inputTexto.value;

    if(validar(texto) == true) 
    {
        alert("El texto contiene mayúsculas, acentos o caracteres especiales. No se puede desencriptar.");
    }

    const reglas = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    for (let i = 0; i < reglas.length; i++) 
    {
        texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
    }
    
    outputTexto.textContent = texto;
    outputTexto.style.color = "#FFFFFF"; 
    muneco.style.display = "none";
    aviso.style.display = "none";
    infoTexto.style.display = "none";
    document.querySelector(".sin-input").classList.remove("ocultar");
}

function limpiar() 
{
    inputTexto.value = "";
    outputTexto.textContent = "";
    muneco.style.display = "block";
    aviso.style.display = "block";
    infoTexto.style.display = "block";
    document.querySelector(".sin-input").classList.add("ocultar");
}

function copiar()
{
    const textoCopiado = outputTexto.textContent;

    navigator.clipboard.writeText(textoCopiado).then(() => {alert("Texto copiado al portapapeles");});
}

document.querySelector("#encriptar").addEventListener("click", encriptar);
document.querySelector("#desencriptar").addEventListener("click", desencriptar);
document.querySelector("#limpiar").addEventListener("click", limpiar);
document.querySelector("#copiar").addEventListener("click", copiar);