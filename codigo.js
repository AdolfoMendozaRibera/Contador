
const boton_iniciar=document.querySelector("#bt-iniciar");
const boton_parar=document.querySelector("#bt-parar");
const boton_VolverEmpezar=document.querySelector("#bt-volver_empezar");
const numero=document.getElementById("contador");


//----------------------INICIAR CONTADOR---------------------------------------

//Para que el numero aumente cada vez que lo llamen
let contador=0;
const contar=()=>
{
    numero.innerHTML=contador;
    contador=contador+1;
    
}

//Empieza el conteo
boton_iniciar.addEventListener("click",(e)=>
{
    //Cada segundo llamara a "contar" y este aumentara el valor del numero en 1 por cada segundo
    tiempo=setInterval(contar,100);
})


//---------------------------PARAR CONTADOR-------------------------------

boton_parar.addEventListener("click",()=>
{
    //Parara de avanzar el temporizador
    clearInterval(tiempo);
})



//--------------------Volver a empezar------------------------------------------


boton_VolverEmpezar.addEventListener("click",()=>
{
    clearInterval(tiempo);
    contador=0;
    numero.innerHTML=contador;
});



