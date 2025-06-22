
function Mainfunction(){
  setTimeout(display, 4000);
}



function display(){
  document.getElementById('mainContent').style = 'display: block; opacity: 1; transition: opacity 1s ease-in-out';
  document.getElementById('loader').style = 'display: none; opacity: 0; transition: opacity 0s ease-in-out';
}