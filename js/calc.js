

let val = document.getElementById("result");

function number(dis)
{	
	document.getElementById("result").value+=dis;
}

function equels()
{
	val.value=eval(val.value);
}
function clear1()
{
val.value=val.value.substring(0,val.value.length-1);
}

function clearScreen(){
 val.value="";
 }
