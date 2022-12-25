premier = document.getElementById("premier");

isItPrime = 'No';
nombre = 0;

while(nombre < 10){
    principal();
    if(isItPrime == 'Yes'){
        premier.innerHTML += '<br> ' + nombre;
    }
    nombre = nombre + 1;
}
