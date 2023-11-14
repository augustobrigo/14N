console.log("entro ej js")
let btnRandom=document.getElementById("btn1");
btnRandom.onclick=funcion1;

function funcion1(){
    btnRandom.setAttribute("disabled",true);
    const   vector=[ "red", "green", "blue", "orange","pink","yellow"]
    const   vectorN=["Rojo","Verde","Azul","Naranja","Rosa","Amarillo"]
    setInterval(cambio,1000);
    function cambio(){
        let posicion1=Math.floor(Math.random()*vector.length);
        let posicion2=Math.floor(Math.random()*vector.length);

        let componente1=document.getElementById("c1");
        componente1.style.backgroundColor=vector[posicion1]
        componente1.textContent=vectorN[posicion2];
        //componente.onclick=comprobar;
        //component.addEventlistener(“mouseover”,comprobar);
        function comprobar(){

        }
        componente1.onclick=function(){
       
        if (posicion1==posicion2){
           alert("Acierto")
         }           
        else
        {
            alert("Proyecto6");
           }
       }
    
       
    }
}

