abc = 0;
widthC = 10;
coeff = 2.4;

//dessinerLeCercle(100, 100);
recupererLesCoordonnees(10, 10);

function recupererLesCoordonnees(xx, yy){
    xxx = coeff * xx;
    yyy = - coeff * yy;
    dessinerLeCercle(xxx, yyy);
}

function dessinerLeCercle(xxx, yyy){
    cercle = document.createElement('div');    
    cercle.classList.add("faceD");
    cercle.style.width = widthC +"px";
    cercle.style.height = widthC +"px";
    cercle.style.background = 'green';

    plan.appendChild(cercle);
    cercle.style.transform = "translateX(" + xxx + "px) translateY(" + yyy + "px)";
}