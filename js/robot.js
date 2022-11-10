const degText = "deg";
var text = "", number;
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var x = new Array();
var xpos = ["30", "25", "45", "60", "70", "125", "140", "130", "167", "88"];
const buttonPlayer = document.getElementById("buttons");
let bool;
function number(){
  return Math.ceil(Math.random() * 3);
}
function makeid() {
  for(var i = 0; i < text.length; i++)
  	text[i] = "";
  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  for (var i = 0; i < 6; i++){
  	x[i] = xpos[~~(Math.random() * xpos.length)]
  }
  document.getElementsByClassName("bukva")[0].textContent = text[0]; document.getElementsByClassName("bukva")[0].style.transform = "rotate("+x[0]+degText+")";
  document.getElementsByClassName("bukva")[1].textContent = text[1]; document.getElementsByClassName("bukva")[1].style.transform = "rotate("+x[1]+degText+")";
  document.getElementsByClassName("bukva")[2].textContent = text[2]; document.getElementsByClassName("bukva")[2].style.transform = "rotate("+x[2]+degText+")";
  document.getElementsByClassName("bukva")[3].textContent = text[3]; document.getElementsByClassName("bukva")[3].style.transform = "rotate("+x[3]+degText+")";
  document.getElementsByClassName("bukva")[4].textContent = text[4]; document.getElementsByClassName("bukva")[4].style.transform = "rotate("+x[4]+degText+")";
  document.getElementsByClassName("bukva")[5].textContent = text[5]; document.getElementsByClassName("bukva")[5].style.transform = "rotate("+x[5]+degText+")";
  number = number();
  document.getElementsByClassName("rec")[0].style.backgroundImage = "url(img/"+number+".png)";
  return text;
}
makeid();

function proverkaCapth(){
	for(var i = 0; i < 6; i++){
		if(text[i] === document.getElementById("textPlayer").value[i]){
			bool = true;

		}else{
			bool = false;
			document.getElementById("textPlayer").value = "";
			alert("Try again!!!");
			break;
		}
	}
	if(bool === true){
		alert("True");
	}
}

buttonPlayer.onclick=()=>{proverkaCapth()}




