
// Get the modal
var modalCredit = document.getElementById('myModalCredit');
var modalOption = document.getElementById('myModalOption');
var modelPlay =  document.getElementById('myModalPlay');
var modelChar = document.getElementById('myModalChar');

// Get the button that opens the modal
var btnCredit = document.getElementById("credits");
//var btnOption = document.getElementById("options");/
var btnPlay = document.getElementById("play");
var btnChar = document.getElementById('char');

// Get the <span> element that closes the modal
var spanCredit = document.getElementsByClassName("close")[0];
//var spanOption = document.getElementsByClassName("close")[1];
var spanChar = document.getElementsByClassName("close")[1];
var spanPlay = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btnCredit.onclick = function() {
  modalCredit.style.display = "block";
}
//btnOption.onclick = function() {
//  modalOption.style.display = "block";
//}
btnPlay.onclick = function() {
  modelPlay.style.display = "block";
}
btnChar.onclick = function() {
  modelChar.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanCredit.onclick = function() {
  modalCredit.style.display = "none";
}
//spanOption.onclick = function() {
//  modalOption.style.display = "none";}
spanPlay.onclick = function() {
  modelPlay.style.display ="none";
}
spanChar.onclick = function() {
  modelChar.style.display ="none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if ( event.target == modalCredit || event.target == modelPlay ||event.target == modelChar) {
//    modalOption.style.display = "none";
    modalCredit.style.display = "none";
    modelPlay.style.display ="none";
     modelChar.style.display ="none";

  }
}
