let count = 0;
function plus(){
    let val=document.getElementById("num").innerHTML;
  let num=Number(val)+1
  document.getElementById("num").innerHTML=num;
}

function minus(){
    let val=document.getElementById("num").innerHTML;
  let num=Number(val)-1
  document.getElementById("num").innerHTML=num;
}

function clearAll(){
  let num=0;
  document.getElementById("num").innerHTML=num;
}