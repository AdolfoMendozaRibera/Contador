
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


//Cada segundo llamara a "contar" y este aumentara el valor del numero en 1 por cada segundo
let tiempo;
const iniciar_contador=()=>
{
    tiempo=setInterval(contar,100);
}

//Empieza el conteo
boton_iniciar.addEventListener("click",(e)=>
{
    iniciar_contador();
})


//---------------------------PARAR CONTADOR-------------------------------

const parar_contador=()=>
{
    clearInterval(tiempo);
}

boton_parar.addEventListener("click",()=>
{
    parar_contador();
})



//--------------------Volver a empezar------------------------------------------


boton_VolverEmpezar.addEventListener("click",()=>
{
    parar_contador();
    contador=0;
    numero.innerHTML=contador;
});



