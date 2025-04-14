document.getElementById("btnMulher").addEventListener("click", function(){
    document.getElementsByTagName("header")[0].style.backgroundColor = "red";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "red";
});
document.getElementById("btnVoltar").addEventListener("click", function(){
    document.getElementsByTagName("header")[0].style.backgroundColor = "#333";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#333";
});
document.getElementById("btnHomem").addEventListener("click", function(){
    document.getElementsByTagName("header")[0].style.backgroundColor = "blue";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "blue";
});