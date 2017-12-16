

var pallet = document.createElement("div");
            pallet.id="toolbar";
            pallet.style.height = "200px";
            pallet.style.width = "1280px";
            document.body.appendChild(pallet);
            pallet.style.margin ="12px";


var canva = document.createElement("div");
            canva.id ="drawer";
            canva.style.height = "500px";
            canva.style.backgroundColor = "black";
            canva.style.width = "500px" ;
            canva.style.border = "solid black 1px";
            canva.style.margin = "0px 0px 0px 11px";
            document.body.appendChild(canva);


var palcolor1 = document.createElement("button");
            palcolor1.id = "barcolor1";
            document.getElementById("toolbar").appendChild(palcolor1);
            palcolor1.style.height = "50px";
            palcolor1.style.width = "50px" ;
            palcolor1.style.backgroundColor = "green";
            palcolor1.style.borderRadius = " 50%";
            palcolor1.style.margin = "50px 30px";
            palcolor1.setAttribute("value" , "green");
            palcolor1.addEventListener("click" ,chcolor);


var palcolor2 = document.createElement("button");
        palcolor2.id = "barcolor2";
        document.getElementById("toolbar").appendChild(palcolor2);
        palcolor2.style.height = "50px";
        palcolor2.style.width = "50px";
        palcolor2.style.borderRadius = " 50%";
        palcolor2.style.backgroundColor = "blue";
        palcolor2.style.margin = "50px 30px";
        palcolor2.setAttribute("value" , "blue");
        palcolor2.addEventListener("click" ,chcolor);


var palcolor3 = document.createElement("button");
        document.getElementById("toolbar").appendChild(palcolor3);
        palcolor3.id = "barcolor3";
        palcolor3.style.height = "50px";
        palcolor3.style.width = "50px";
        palcolor3.style.backgroundColor = "yellow";
        palcolor3.style.borderRadius = "50%";
        palcolor3.style.margin = "50px 30px";
        palcolor3.setAttribute("value" , "yellow");
        palcolor3.addEventListener("click" ,chcolor);

var palcolor4 = document.createElement("button");
        palcolor4.id = "barcolor4";
        document.getElementById("toolbar").appendChild(palcolor4);
        palcolor4.style.height = "50px";
        palcolor4.style.width = "50px";
        palcolor4.style.borderRadius = "50%";
        palcolor4.style.backgroundColor = "red";
        palcolor4.style.margin = "50px 30px";
        palcolor4.setAttribute("value" , "red");
        palcolor4.addEventListener("click" ,chcolor);

var Palcolor5 = document.createElement("button");
        Palcolor5.id = "barcolor5";
        document.getElementById("toolbar").appendChild(Palcolor5);
        Palcolor5.style.height = "50px";
        Palcolor5.style.width = "50px";
        Palcolor5.style.borderRadius = "50%";
        Palcolor5.style.backgroundColor = "pink";
        Palcolor5.style.margin = "50px 30px";
        Palcolor5.setAttribute("value" ,"pink");
        Palcolor5.addEventListener("click" ,chcolor);

var Gomme = document.createElement("button");
        Gomme.id = "gomme";
        document.getElementById("toolbar").appendChild(Gomme);
        Gomme.style.height = "50px";
        Gomme.style.width = "50px";
        Gomme.style.backgroundColor = "white";
        Gomme.style.margin = "50px 30px";
        Gomme.setAttribute("value" ,"white");
        Gomme.addEventListener("click" ,chcolor);
       document.getElementById("clear").innerHTML += '<br>Eraser';


var Buttonchsize = document.createElement("input");
        document.getElementById("toolbar").appendChild(Buttonchsize);
        Buttonchsize.id = "buttons_ize"
        Buttonchsize.style.height = "50px";
        Buttonchsize.style.width = "50px";
        Buttonchsize.style.margin = "50px 60px";
        Buttonchsize.setAttribute("type" ,"number");
        Buttonchsize.addEventListener("input",chheight);



var Clear = document.createElement("button");
        Clear.id = "clear";
        document.getElementById("toolbar").appendChild(Clear);
        Clear.style.border = "solid black 1px";
        Clear.style.height = "50px";
        Clear.style.width = "70px";
        Clear.addEventListener("click" ,Cleaning);
        document.getElementById("clear").innerHTML += '<br>Clear';

document.getElementById('barcolor2').style.display='inline-block';
document.getElementById('barcolor3').style.display='inline-block';
document.getElementById('barcolor4').style.display='inline-block';
document.getElementById('barcolor1').style.display='inline-block';
document.getElementById('buttons_ize').style.display='inline-block';
document.getElementById('gomme').style.display='inline-block';
document.getElementById('clear').style.display='inline-block';

selectcolor ="black" ;

var mousedown = false;

Heightpaint  = "8px";
Widthpaint ="8px";

    function souris(e)
{
    if(mousedown){
        var paint = document.createElement("div");
        paint.id = "peinture";
        paint.style.height  = Heightpaint;
        paint.style.width =Widthpaint;
        paint.style.backgroundColor = selectcolor ;
        paint.style.borderRadius = "50%";
        paint.style.position = "absolute";
        document.getElementById("drawer").appendChild(paint);
        x = e.pageX + "px";
        y = e.pageY + "px";
        paint.style.top = y;
        paint.style.left = x;
    }
}

    function chcolor(){
selectcolor = this.value;
}

    function enable(){
             mousedown = true;
}
    function mouseup(){
             mousedown = false;
}


canva.addEventListener("mousemove",souris);
canva.addEventListener("mousedown", enable);
canva.addEventListener("mouseup", mouseup);



    function chheight(){
        selectheight = this.input;
        console.log(Buttonchsize);
        canva.style.height = selectheight ;
}

    function chwidth(){
       selectwidth = this.type;
}


 function Cleaning(){
        canva.innerHTML = " ";
    }

