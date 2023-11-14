console.log("entro ej js")
let btn1=document.getElementById("btn1");
btn1.onclick=funcion1;

function funcion1(){
    btn1.setAttribute("disabled",true)
    const   vector=[ "red", "green", "blue", "orange","pink","yellow"]
    const   vectorN=["Rojo","Verde","Azul","Naranja","Rosa","Amarillo"]
    setInterval(cambio,1000);
    function cambio(){
        let posicion=Math.floor(Math.random()*vector.length);
        let componente1=document.getElementById("c1");
        componente1.style.backgroundColor=vector[posicion]
        componente1.textContent=vectorN[posicion]
    }
  
    

}
