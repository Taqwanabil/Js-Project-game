
// Get the modal
var modelPlay =  document.getElementById('myModalPlay');
var modelExit = document.getElementById('myModalExit');



// Get the button that opens the modal
var btnExit = document.getElementById('Exit');
var btnPlay = document.getElementById("play");


// Get the <span> element that closes the modal

var spanExit = document.getElementsByClassName("close")[1];
var spanPlay = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 

btnPlay.onclick = function() {

    modelPlay.style.display = "block";
}
btnExit.onclick = function() {
          modelExit.style.display = "block";
}

spanPlay.onclick = function() {
          modelPlay.style.display ="none";
}

spanExit.onclick = function() {
          modelExit.style.display ="none";
}

function validateForm() {

var name=document.getElementById("fname").value;
        if (name == ""){
            alert("Please Enter Your Username");
            location = 'login Page.html';
            return false;
        }else{
            document.getElementById("alert_name").innerHTML= " ";
            location = '../htmls/index.html';
        }
        return false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modelPlay ||  event.target == modelExit) {
       modelPlay.style.display ="none";
       modelExit.style.display ="none";  

  }
}

var r = document.getElementById('retn');

r.onclick = function (){
    location.href= "login Page.html";
};