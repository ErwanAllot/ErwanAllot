widthC = 20;
coeff = 20;

voir.innerHTML = Math.cos(Math.PI*3);
revoir.innerHTML = Math.round(Math.sin(Math.PI*2));

encore.innerHTML = Math.round(3.2117* 100) / 100;

//dessinerLeCercle(100, 100);
//recupererLesCoordonnees(Math.cos(Math.PI*4), 10, 2);

//CQJV
recupererLesCoordonnees(0, 1, 2);
recupererLesCoordonnees(0, -1, 3);

function recupererLesCoordonnees(xx, yy, value){
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

    plan.appendChild(cercle);
    cercle.style.transform = "translateX(" + xxx + "px) translateY(" + yyy + "px)";
}