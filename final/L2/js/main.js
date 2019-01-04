$(function () {

    the_game = function () {

        if (check_rocket_hits_floor(rocket1) || check_rocket_hits_char(rocket1)) {
            set_rocket_to_initial_position(rocket1);
        } else {
            rocket_down(rocket1);
        }

        if (check_rocket_hits_floor(rocket2) || check_rocket_hits_char(rocket2)) {
            set_rocket_to_initial_position(rocket2);
        } else {
            rocket_down(rocket2);
        }

        if (check_rocket_hits_floor(rocket3) || check_rocket_hits_char(rocket3)) {
            set_rocket_to_initial_position(rocket3);
        } else {
            rocket_down(rocket3);
        }
         if (check_rocket_hits_floor(rocket4) || check_rocket_hits_char(rocket4)) {
            set_rocket_to_initial_position(rocket4);
        } else {
            rocket_down(rocket4);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});
var testing=document.getElementById("test");
console.log(getCookie("selectImg"));
testing.src=getCookie("selectImg");

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



