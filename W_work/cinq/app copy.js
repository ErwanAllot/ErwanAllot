premier = document.getElementById("premier");
graphique = document.getElementById("graphique");
repeter = document.getElementById("repeter");

//isItPrime = 'No';
nombre = 0;

compteur = 0;

cycle = 0;

while(nombre < 10){
    principal();
    if(isItPrime == 'Yes'){
        premier.innerHTML += '<br> ' + nombre;

        if(compteur == 0){
            cycle = nombre;

        }   
        if (compteur < cycle){
            compteur = compteur + 1;
        }
        else {compteur = 0;}

        repeter.innerHTML += '<br> ' + nombre + ' ' + cycle + ' ' + compteur;
        
    }




    nombre++;
}

widthC = 20;
coeff = 20;

imprimerNombre(1, 0, 2);
imprimerNombre(-1, 0, 3);
imprimerNombre(Math.cos(Math.PI*2 + Math.PI), Math.sin(Math.PI*2 + Math.PI), 3);

imprimerNombre(Math.cos(Math.PI*2 + Math.PI + (Math.PI*2 / 3)), Math.sin(Math.PI*2 + Math.PI + (Math.PI*2 / 3)), 5);

imprimerNombre(Math.cos(Math.PI*2 + Math.PI  + (Math.PI*2 / 3)), Math.sin(Math.PI*2 + Math.PI + (Math.PI*2 / 3) + (Math.PI*2 / 3)), 7);



function imprimerNombre(xx, yy, value){
    xxx = coeff * value * xx;
    yyy = - coeff * value * yy;
    dessinerLeCercle(xxx, yyy, value);
}

function dessinerLeCercle(xxx, yyy, value){
    cercle = document.createElement('div');    
    cercle.classList.add("faceD");
    cercle.style.width = widthC +"px";
    cercle.style.height = widthC +"px";
    cercle.style.background = 'green';
    cercle.innerHTML = value;
    cercle.style.fontSize="20px";

    graphique.appendChild(cercle);
    cercle.style.transform = "translateX(" + xxx + "px) translateY(" + yyy + "px)";
}