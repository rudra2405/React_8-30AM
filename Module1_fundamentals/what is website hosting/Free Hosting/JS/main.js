function clearData(){
  document.getElementById('result').value = '';  
}

function inputButton(val){
  document.getElementById('result').value += val;
}


function erase(){
  let slc = document.getElementById('result').value;
  let res = slc.slice(0,-1);
  document.getElementById('result').value = res;
}


function calculate(){
  let cal = document.getElementById('result').value;
  let x = eval(cal);
  document.getElementById('result').value = x;
}

function squareRoot(){
  let sqroot = document.getElementById('result').value;
  let x = Math.sqrt(sqroot);
  document.getElementById('result').value = x;
}


function squr(){
  let sq = document.getElementById('result').value;
  let x = Math.pow(sq, 2);
  document.getElementById('result').value = x;
}

function cube(){
  let cb = document.getElementById('result').value;
  let x = Math.pow(cb, 3);
  document.getElementById('result').value = x;
}