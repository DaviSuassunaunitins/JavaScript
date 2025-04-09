let temp = true;
function trocar() {
    temp = !temp;
    if (temp) {
        document.getElementById("tempo1").src = "img/chuva.png";
        document.getElementById("tempo2").src = "img/chuva.png";
    }
    else {
        document.getElementById("tempo1").src = "img/sol.png";
        document.getElementById("tempo2").src = "img/sol.png";
    }    
}