let cont = 1;
let qtdW = 200;
let whileTxt = "";
while (cont <= qtdW) {
    whileTxt = whileTxt + cont + "<br>";
    cont ++;
}
document.getElementById("while").innerHTML = whileTxt;
let qtdF = 200;
let forText = "";
for (let i = 1; i <= qtdF; i ++) {
    forText = forText + i + "<br>";
}
document.getElementById("for").innerHTML = forText;
