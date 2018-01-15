

 // Initialiasation of the palett

 var h = window.innerHeight;
 var w = window.innerWidth;
 var backgroundPage = document.createElement("div");
                      backgroundPage.style.height = h+"px";
                      backgroundPage.id = "back_Page";
                      backgroundPage.style.width = w+"px";
                      document.body.appendChild(backgroundPage);
                      backgroundPage.style.border = "black 1px";



var pallet = document.createElement("div");
            pallet.id="toolbar";
            pallet.style.height = "561px";
            pallet.style.width = "280px";
            backgroundPage.appendChild(pallet);
            pallet.style.margin ="0px Opx 0px 0px";
            pallet.style.display = "inline-block";
            pallet.style.position = "absolute";



var canva = document.createElement("div");
            canva.id ="drawer";
            canva.style.height = "500px";
            canva.style.backgroundColor = "lightgray";
            canva.style.width = 500+"px" ;
            canva.style.margin = "40px 0px 500px 500px";
            backgroundPage.appendChild(canva);
            canva.style.display = "inline-block";


var palcolor1 = document.createElement("button");
            palcolor1.id = "barcolor1";
            document.getElementById("toolbar").appendChild(palcolor1);
            palcolor1.style.height = "50px";
            palcolor1.style.width = "50px" ;
            palcolor1.style.backgroundColor = "green";
            palcolor1.style.borderRadius = " 50%";
            palcolor1.style.margin = "25px 30px";
            palcolor1.setAttribute("value" , "green");
            palcolor1.addEventListener("click" ,chcolor);


var palcolor2 = document.createElement("button");
        palcolor2.id = "barcolor2";
        document.getElementById("toolbar").appendChild(palcolor2);
        palcolor2.style.height = "50px";
        palcolor2.style.width = "50px";
        palcolor2.style.borderRadius = " 50%";
        palcolor2.style.backgroundColor = "blue";
        palcolor2.style.margin = "25px 30px";
        palcolor2.setAttribute("value" , "blue");
        palcolor2.addEventListener("click" ,chcolor);


var palcolor3 = document.createElement("button");
        document.getElementById("toolbar").appendChild(palcolor3);
        palcolor3.id = "barcolor3";
        palcolor3.style.height = "50px";
        palcolor3.style.width = "50px";
        palcolor3.style.backgroundColor = "yellow";
        palcolor3.style.borderRadius = "50%";
        palcolor3.style.margin = "25px 30px";
        palcolor3.setAttribute("value" , "yellow");
        palcolor3.addEventListener("click" ,chcolor);

var palcolor4 = document.createElement("button");
        palcolor4.id = "barcolor4";
        document.getElementById("toolbar").appendChild(palcolor4);
        palcolor4.style.height = "50px";
        palcolor4.style.width = "50px";
        palcolor4.style.borderRadius = "50%";
        palcolor4.style.backgroundColor = "red";
        palcolor4.style.margin = "25px 30px";
        palcolor4.setAttribute("value" , "red");
        palcolor4.addEventListener("click" ,chcolor);

var Palcolor5 = document.createElement("button");
        Palcolor5.id = "barcolor5";
        document.getElementById("toolbar").appendChild(Palcolor5);
        Palcolor5.style.height = "50px";
        Palcolor5.style.width = "50px";
        Palcolor5.style.borderRadius = "50%";
        Palcolor5.style.backgroundColor = "orange";
        Palcolor5.style.margin = "25px 30px";
        Palcolor5.setAttribute("value" ,"orange");
        Palcolor5.addEventListener("click" ,chcolor);


var Gomme = document.createElement("button");
        Gomme.id = "gomme";
        document.getElementById("toolbar").appendChild(Gomme);
        Gomme.setAttribute("value" ,"lightgray");
        Gomme.addEventListener("click" ,chcolor);

var ButtonChsize = document.createElement("input");
        document.getElementById("toolbar").appendChild(ButtonChsize);
        ButtonChsize.id = "buttons_ize";
        ButtonChsize.setAttribute("type" ,"number");
        ButtonChsize.setAttribute("class","curve");

var buttonChange = document.createElement('button');
        document.getElementById("toolbar").appendChild(buttonChange);
        buttonChange.id = "button_change";
        buttonChange.setAttribute("class","curve");
        buttonChange.setAttribute("class","btn-info");
         document.getElementById("button_change").innerHTML += '<br>Change';
        buttonChange.addEventListener("click",function(){
        var i  = document.getElementById('buttons_ize').value;
        console.log(i);
        if(i<=561 && i>=150 ){
        document.getElementById('drawer').style.height = i+"px";
        document.getElementById('drawer').style.width = i+"px";
        }
        });
        ButtonChsize.setAttribute("placeholder","Resize");

var Clear = document.createElement("button");
        Clear.id = "clear";
        document.getElementById("toolbar").appendChild(Clear);
        Clear.style.border = "solid black 1px";
        Clear.setAttribute("class","curve");
        Clear.setAttribute("class","btn-info");
        document.getElementById("clear").innerHTML += '<br>Clear';
        Clear.addEventListener("click",function(){
        canva.innerHTML = " ";
        document.getElementById('drawer').style.height = "500px";
        document.getElementById('drawer').style.width = "500px";
        });

        document.getElementById('barcolor2').style.display='inline-block';
        document.getElementById('barcolor3').style.display='inline-block';
        document.getElementById('barcolor4').style.display='inline-block';
        document.getElementById('barcolor1').style.display='inline-block';
        document.getElementById('buttons_ize').style.display='inline-block';
        document.getElementById('gomme').style.display='inline-block';
        document.getElementById('button_change').style.display='inline-block';
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
        paint.style.width = Widthpaint;
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




