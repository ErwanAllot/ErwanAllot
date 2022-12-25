constantes();

function constantes(){
    widthC = 20;
    coeff = 20;
}

voir.innerHTML = Math.cos(Math.PI*3);
revoir.innerHTML = Math.round(Math.sin(Math.PI*2));
encore.innerHTML = Math.round(3.2117* 100) / 100;
x = 0;
x = arrondir(3.2117);
encore.innerHTML = x; 

y = 3
y = add(y);
okiki = document.getElementById('okiki');
okiki.innerHTML = y;

function add(val){
    return val + 5;
}

function arrondir(value){
   return Math.round(value* 100) / 100;
}

//CQJV
imprimerNombre(1, 0, 2);
//imprimerNombre(-1, 0, 3);
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