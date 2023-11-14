console.log("entro ej js")
var btnActivar=document.getElementById("btn1");
btnActivar.onclick=funcion1;




function funcion1(){
    btnActivar.setAttribute("disabled",true)
    const   vector=[ "red", "green", "blue", "orange","pink","yellow"]
    const   vectorN=["Rojo","Verde","Azul","Naranja","Rosa","Amarillo"]
    setInterval(cambio,1000);
    function cambio(){
       
        const cajas=document.querySelectorAll(".caja");
        console.log("cajas: "+cajas)
        cajas.forEach(recorrer);
        function recorrer(item,index){
            let posicion1=Math.floor(Math.random()*vector.length);
            let posicion2=Math.floor(Math.random()*vector.length);
            item.style.backgroundColor=vector[posicion1]
            item.textContent=vectorN[posicion2];
            
        }
      
      
    }
    
       
    }



function funcion2(){
   
    const listaComponentes=document.getElementsByClassName("caja");
    for (let item of listaComponentes){
        let valor=prompt("teclea un número");
        item.innerHTML=valor;
    }
}
function funcion3(){
    const listaComponentes=document.getElementsByClassName("caja");

    setInterval(cambio,3000);
    function cambio(){
        for (let item of listaComponentes){
            console.log("entro");
         item.innerHTML=Math.round(Math.random()*100);
    }
}

}
function funcion4(){
    let vector=[ "#00a8d1", "#9200d1", "#92ffd1", "#ff6a80"]
    const listaComponentes = document.getElementsByClassName("caja");
  
    for (let i = 0; i < listaComponentes.length; i++) {
        let posicion=Math.floor(Math.random()*vector.length);
        console.log(posicion);
        listaComponentes[i].style.backgroundColor = vector[posicion];
       
    }
}
function funcion5(){
    let puntos=0;
    const   vector=[ "red", "green", "blue", "orange"]
    let posicion=Math.floor(Math.random()*vector.length);
    btn5.style.backgroundColor=vector[posicion]
    setInterval(cambio,3000);
    function cambio(){
   
    const listaComponentes = document.getElementsByClassName("caja");
    Array.from(listaComponentes).forEach(function(elemento) {
        let posicion=Math.floor(Math.random()*vector.length);
        elemento.style.backgroundColor=vector[posicion];
        elemento.onclick()=accion1;
        elemento.addEventListener('click', function(){
           if ( elemento.style.backgroundColor==btn5.style.backgroundColor)
           puntos++;
           else puntos--;
           
        });
      });
    }
   
}
function funcion6(){
    let segundos=10;
    repeticion=setInterval(cambio,1000);
    function cambio(){
        c1.innerHTML=segundos;
        segundos--;
        if (segundos==-1){
            alert("fin de partida");
            if (confirm("¿otra partida?"))
            {
                segundos=10;
            }
            else{
                clearInterval(repeticion);
            }
        }
    }
}