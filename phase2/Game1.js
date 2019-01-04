// Get the modal

var modalCredit = document.getElementById('myModalCredit');
var modalLevel = document.getElementById('myModalLevel');
var modelChar = document.getElementById('myModalChar');

// Get the button that opens the modal

var btnLevel = document.getElementById('level');
var btnChar = document.getElementById('char');
var btnCredit = document.getElementById('credits');


// Get the <span> element that closes the modal

var spanLevel = document.getElementsByClassName("close")[1];
var spanChar = document.getElementsByClassName("close")[2];
var spanCredit = document.getElementsByClassName("close")[0];



// When the user clicks the button, open the modal 
btnCredit.onclick = function() {
  modalCredit.style.display = "block";
}
btnLevel.onclick = function() {
  modalLevel.style.display = "block";
}
btnChar.onclick = function() {
  modelChar.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanCredit.onclick = function() {
  modalCredit.style.display = "none";
}
spanLevel.onclick = function() {
  modalLevel.style.display = "none";
}

spanChar.onclick = function() {
  modelChar.style.display ="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if ( event.target == modalCredit || event.target == modelChar || event.target == modalLevel ) {
    modalCredit.style.display = "none";
    modalLevel.style.display = "none";
    modelChar.style.display ="none";
  }
}
//Charcter Selection
function selectimage(btnImage)
{

  //document.cookie=btnImage.src;
  setCookie("selectImg",btnImage.src);
  
  modelChar.style.display ="none";
  //save img in cookie
// display none
  //close menu

}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" ;
} 

//Redirect to levels
var l1 = document.getElementById('level1');
var l2 = document.getElementById('level2');
var l3 = document.getElementById('level3');

l1.onclick = function (){
    location.href= "index1.html";
};
l2.onclick = function (){
    location.href= "/../js.lvl.2/index2.html";
};
