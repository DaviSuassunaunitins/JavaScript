document.getElementById("btnMulher").addEventListener("click", function(){
    document.getElementById("header").style.backgroundColor = "red";
    document.getElementById("footer").style.backgroundColor = "red";
},false);
document.getElementById("btnVoltar").addEventListener("click", function(){
    document.getElementById("header").style.backgroundColor = "#333";
    document.getElementById("footer").style.backgroundColor = "#333";
},false);
document.getElementById("btnHomem").addEventListener("click", function(){
    document.getElementById("header").style.backgroundColor = "blue";
    document.getElementById("footer").style.backgroundColor = "blue";
},false);