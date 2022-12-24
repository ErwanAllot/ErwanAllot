premier = document.getElementById("premier");
graphique = document.getElementById("graphique");
repeter = document.getElementById("repeter");
details = document.getElementById("details");

//isItPrime = 'No';
nombre = 3;
precedent = 2;
compteur = 1;
cycle = 2;

nombre = 2;
precedent = 1;
compteur = 0;
cycle = 2;

// On a ici l'algo II déjà fait
// je veux d'abord l'algo I
while(nombre < 40){
    principal();
    if(isItPrime == 'Yes'){
        premier.innerHTML += '<br> ' + nombre;


        if (compteur == cycle){
            cycle = precedent;
            compteur = 2;
        }
        else {
            compteur++;
        }

        repeter.innerHTML += '<br> ' + nombre + ' ' + cycle + ' ' + compteur;
        precedent = nombre;
    }

//CQJV
// 2 2 1
// 3 2 2
// 5 3 2
// 7 3 3


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