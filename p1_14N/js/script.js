console.log("entro ej js")
document.getElementById("btn1").onclick=funcion1;
//document.querySelector("#btn1").addEventListener("click",funcion1)

function funcion1(){
    console.log("entro");
    let componente1=document.getElementById("c1");
    componente1.textContent=Math.round(Math.random()*100);   
    

}
