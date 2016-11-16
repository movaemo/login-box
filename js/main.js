var login = document.getElementById('login');
var shadow = document.getElementById('shadow');
var modalBox = document.getElementById('modalBox');
var close = document.getElementById('close');

login.onclick = function (){
  shadow.style.display = 'block';
  modalBox.style.display = 'block';
}
close.onclick = function (){
  shadow.style.display = 'none';
  modalBox.style.display = 'none';
}