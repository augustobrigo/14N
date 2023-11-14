console.log("entro ej js")
document.getElementById("btn1").onclick=funcion1;


function funcion1(){
    const   vector=[ "red", "green", "blue", "orange","pink","yellow"]
    const   vectorN=["Rojo","Verde","Azul","Naranja","Rosa","Amarillo"]

    let posicion=Math.floor(Math.random()*vector.length);
    let componente1=document.getElementById("c1");
    componente1.style.backgroundColor=vector[posicion]
    componente1.textContent=vectorN[posicion]
    

}
