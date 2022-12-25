widthC = 1;
coeff = 1/10;
limit = 10000;

nombre = 0;
compteur = 0;
cycle = 0;
angle = 0;


while(nombre < limit){
    principal();
    algoTwo();
    nombre++;
}



function algoTwo(){
    if(isItPrime == 'Yes'){
        if(compteur == 0){
            cycle = nombre;

        }   
        if (compteur < cycle){
            compteur = compteur + 1;
        }
        else {
            compteur = 1;
            cycle = nombre;
        }
        angle = angle + (Math.PI*2 / cycle);
        precedent = nombre;
        //ecrireDataDom();

        cosP = Math.cos(angle);
        sinP = Math.sin(angle);
        imprimerNombre(cosP, sinP, nombre);
    }
}

function ecrirePremier(){
    premier.innerHTML += '<br> ' + nombre;
}

function ecrireDataDom(){
    repeter.innerHTML += '<br> ' + nombre + ' ' + cycle + ' ' + compteur + ' ' + angle;
}



function imprimerNombre(xx, yy, value){
    // xxx = coeff * Math.log10(value) * xx;
    // yyy = - coeff * Math.log10(value) * yy;
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
    //cercle.innerHTML = value;
    //cercle.style.fontSize="20px";

    graphique.appendChild(cercle);
    cercle.style.transform = "translateX(" + xxx + "px) translateY(" + yyy + "px)";
}