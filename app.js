// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaNombres = [];
lista = document.getElementById('listaAmigos');


function agregarAmigo() {
    
        let nombreAmigo = document.getElementById('amigo').value;
        if (!nombreAmigo){
        alert('Ingrese Nombre Valido');
        }
        else{  
        listaNombres.push(nombreAmigo);
        mostrarLista();
        limpiarCaja(); 
        }
}

function mostrarLista(){
    
    lista.innerHTML = "";
    for (let i=0; i < listaNombres.length; i++){  
      const li = document.createElement('li');
      li.textContent = listaNombres[i];  
      lista.appendChild(li);
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}


function sortearAmigo(){
    
    if(listaNombres.length === 0){
    alert("No hay nombres para el sorteo")
    }
    else {
    valorAleatorio = listaNombres[Math.floor(Math.random()*listaNombres.length)]
    console.log(valorAleatorio);
    lista.innerHTML = "";
    amigoSecreto = document.getElementById('resultado')
    amigoSecreto.innerHTML = ('El amigo Secreto es: ' + valorAleatorio)
}
}