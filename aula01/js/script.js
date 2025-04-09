document.getElementById("demo").innerHTML = "Davisão";
function aumentar() {
    document.getElementById("demo").style.fontSize = "35px";
}
function diminuir() {
    document.getElementById("demo").style.fontSize = "15px";
}
function desligar() {
    document.getElementById("lamp").src = "img/apagada.png"
}
function ligar() {
    document.getElementById("lamp").src = "img/acesa.png"
}