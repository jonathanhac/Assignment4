

var pallet = document.createElement("div");
pallet.id="toolbar";
pallet.style.height = "200px";
pallet.style.width = "1200px";
pallet.style.border = "solid black 1px";
document.body.appendChild(pallet);
pallet.style.margin ="12px";

var canva = document.createElement("div");
canva.id ="drawer";
canva.style.height = "500px";
canva.style.width = "500px";
canva.style.border = "solid black 1px";
document.body.appendChild(canva);

var palcolor1 = document.createElement("div");
palcolor1.id = "barcolor1";
document.getElementById("toolbar").appendChild(palcolor1);
palcolor1.style.height = "50px";
palcolor1.style.width = "50px" ;
palcolor1.style.border = "solid black 1px";
palcolor1.style.borderRadius = " 50%";
palcolor1.style.margin = "50px 30px";


var palcolor2 = document.createElement("div");
palcolor2.id = "barcolor2";
document.getElementById("toolbar").appendChild(palcolor2);
palcolor2.style.height = "50px";
palcolor2.style.width = "50px";
palcolor2.style.border = "solid black 1px";
palcolor2.style.borderRadius = " 50%";
palcolor2.style.margin = "50px 80px";


var palcolor3 = document.createElement("div");
document.getElementById("toolbar").appendChild(palcolor3);
palcolor3.id = "barcolor3";
palcolor3.style.height = "50px";
palcolor3.style.width = "50px";
palcolor3.style.border = "solid black 1px";
palcolor3.style.borderRadius = "50%";
palcolor3.style.margin = "50px 60px";

var palcolor4 = document.createElement("div");
palcolor4.id = "barcolor4";
document.getElementById("toolbar").appendChild(palcolor4);
palcolor4.style.height = "50px";
palcolor4.style.width = "50px";
palcolor4.style.border = "solid black 1px";
palcolor4.style.borderRadius = "50%";
palcolor4.style.margin = "50px 60px";


document.getElementById('barcolor2').style.display='inline-block';
document.getElementById('barcolor3').style.display='inline-block';
document.getElementById('barcolor4').style.display='inline-block';
document.getElementById('barcolor1').style.display='inline-block';

function souris(){
var paint = document.createElement("div");
paint.id = "peinture";
paint.style.height  = "10px";
paint.style.width = "10px";
paint.style.borderRadius = "50%";
paint.style.backgroundColor = "black" ;
paint.style.position = "absolute";
document.getElementById("drawer").appendChild(paint);
}

document.addEventListener("click", souris);

