
// Get the modal
var modelPlay =  document.getElementById('myModalPlay');
var modelExit = document.getElementById('myModalExit');



// Get the button that opens the modal
var btnExit = document.getElementById('Exit');
var btnPlay = document.getElementById("play");
//var btnNo = document.getElementById("No");

// Get the <span> element that closes the modal

var spanExit = document.getElementsByClassName("close")[0];
var spanPlay = document.getElementsByClassName("close")[1];
//var spanNo = document.getElementsByClassName("close")[2];
//var spanYes = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 

btnPlay.onclick = function() {

    modelPlay.style.display = "block";
}
btnExit.onclick = function() {
          modelExit.style.display = "block";
}
//btnNo.onclick = function() {
//          modelExit.style.display = "block";
//}

spanPlay.onclick = function() {
          modelPlay.style.display ="none";
}
//spanNo.onclick = function() {
//     modelExit.style.display ="none";
//}
spanExit.onclick = function() {
          modelExit.style.display ="none";
}

   var btn =document.getElementById('submit');
       
        btn.addEventListener('click',formValidate);
        function formValidate()
        {
            var f = document.forms["my-form"]["fname"];
                
            if ( f.value == "")
              {
                  alert("please enter your name")
                document.getElementById("e1").style.display = "block";
//                   setTimeout(formValidate,1000);
                f.focus();
              }
       
         }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modelPlay ||  event.target == modelExit) {
       modelPlay.style.display ="none";
       modelExit.style.display ="none";  

  }
}
void windowClose()
{
    Application.Quit ();
    Debug.log("Game is Exiting");
}
