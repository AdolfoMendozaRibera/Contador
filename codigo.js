
const boton_iniciar=document.querySelector("#bt-iniciar");
const boton_parar=document.querySelector("#bt-parar");
const boton_VolverEmpezar=document.querySelector("#bt-volver_empezar");
const numero=document.getElementById("contador");


//----------------------INICIAR CONTADOR---------------------------------------

//Para que el numero aumente cada vez que lo llamen
let contador=0;             
let ver = new Boolean(false);    //bandera que avisara si esta avanzando o pausado el contador.
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
    //Cuando inicie el contador true se convierte en "true"
    ver=true;
}

//Empieza el conteo
boton_iniciar.addEventListener("click",(e)=>
{
    //Si el contador esta pausado, volvera a iniciar el contado desde donde lo dejo
    if (ver==false)
    {
        iniciar_contador();
    }
})


//---------------------------PARAR CONTADOR-------------------------------

const parar_contador=()=>
{
    clearInterval(tiempo);
    //Cuando el contador se pare, ver se vuelve "false"
    ver=false;
}

boton_parar.addEventListener("click",()=>
{
    //Si el contador esta avanzando, ya se puede parar
    if (ver==true)
    {
        parar_contador();
    }
})



//--------------------Volver a empezar------------------------------------------


boton_VolverEmpezar.addEventListener("click",()=>
{
    parar_contador();
    contador=0;
    numero.innerHTML=contador;
});



