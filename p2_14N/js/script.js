console.log("entro ej js")
document.getElementById("btn1").onclick=funcion1;




function funcion1(){
    console.log("entro");
    let componente1=document.getElementById("c1");
    let numRandom=Math.round(Math.random()*1000);
    componente1.textContent=numRandom;   
    if (numRandom>500){
        componente1.style.color='Blue';
        componente1.style.backgroundColor='Yellow'
    }else
    {
        componente1.style.color='Red';
        componente1.style.backgroundColor='Green'

    }
    

}
