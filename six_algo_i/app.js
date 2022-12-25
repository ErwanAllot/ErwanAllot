widthC = 1;
coeff = 1/100;
limit = 100000;

function constanteAlgoOneType2(){
    nombre = 3;
    precedent = 2;
    compteur = 1;
    cycle = 2;
    angle = Math.PI*2;
}
function constanteAlgoOneType1(){
    nombre = 2;
    precedent = 1;
    compteur = 0;
    cycle = 2;
}

constanteAlgoOneType2();
repeter.innerHTML = '<br> ' + 'nombre' + ' ' + 'cycle' + ' ' + 'compteur';
repeter.innerHTML += '<br> ' + 2 + ' ' + cycle + ' ' + compteur + ' ' + angle;

while(nombre < limit){
    principal();
    algoOne();
    nombre++;
}

function algoOne(){
    if(isItPrime == 'Yes'){
        //ecrirePremier();
        if (compteur == cycle){
            cycle = precedent;
            compteur = 2;
        }
        else {compteur++;}
        
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