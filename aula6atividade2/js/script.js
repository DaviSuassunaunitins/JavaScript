function verificar() {
let qtd = Number(document.getElementById("num1").value);
let cont = 1;
let txt = "";
while (cont <= 10) {
    txt = txt + "<br>" + cont + " x " + qtd + " = " + (cont * qtd);
    cont ++;
}
document.getElementById("while").innerHTML = txt;
}
function calcular() {
    let txtFor = "";
    let qtd = Number(document.getElementById("num2").value);
    for (let i = 1; i <= 10; i ++) {
        txtFor = txtFor + "<br>" + i + " x " + qtd + " = " + (i * qtd);
    }
    document.getElementById("for").innerHTML = txtFor;
}