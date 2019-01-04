$(document).on('mousemove', function (e) {
    char.css('left', e.pageX);
});

function rocket_down(rocket) {
    rocket_current_position = parseInt(rocket.css('top'));
    rocket.css('top', rocket_current_position + speed);
}

function check_rocket_hits_floor(rocket) {
    if (collision(rocket, floor)) {
        show_bomb(rocket);
        decrement_life();
        return true;
    }
    return false;
}

function set_rocket_to_initial_position(rocket) {
    rocket.css('top', rocket_initial_position);
}

function show_bomb(rocket) {
    bomb_num = rocket.attr('data-bomb');
    $('#bomb' + bomb_num).show();
    hide_bomb(bomb_num);
}

function hide_bomb(bomb_num) {
    setTimeout(function () {
        $('#bomb' + bomb_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_rocket_hits_char(rocket) {
    if (collision(rocket, char)) {
        rocket_top = parseInt(rocket.css('top'));
        if (rocket_top < char_top) {
            update_score();
            return true;
        }
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
    Status();
}


function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});

function Status()
{
    if(score==10)
    {
       document.getElementById("daiamondimg").style.display="block";
       setTimeout(function(){ 

        document.getElementById("daiamondimg").style.display="none";

        }, 3000);

    }
    else if(score==20)
    {
        document.getElementById("daiamondimg1").style.display="block";
        setTimeout(function(){ 
 
         document.getElementById("daiamondimg1").style.display="none";
 
         }, 3000);

    }
else if(score==30)
{
    document.getElementById("daiamondimg2").style.display="block";
        setTimeout(function(){ 
 
         document.getElementById("daiamondimg2").style.display="none";
 
         }, 3000);
}

}

