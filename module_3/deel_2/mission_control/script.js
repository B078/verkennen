// variables om de timeout & interval bij te houden
var countdown_event = null;
var timed_event = null;

// zet de mission control title, button en clear de countdown (interval & nummer) en timeout
function set_mission_control(title, buttonTitle, buttonOnclick) {

document.getElementById('mission-control') = title;


    let button = document.getElementById('control-button');
    button.innerHTML = buttonTitle;
    button.onclick = buttonOnclick;

    clearInterval(start_countdown_eventcountdown_event);
    document.getElementById('countdown').innerHTML = "";

}

// verwijder alle states van de raket en voegt de juiste toe
function set_rocket_state(state) {

    for (var i = 1; i <= 8; i++) {
        document.getElementById('rocket.state' + i).style.display = 'none';
    }

    document.getElementById('rocketState' + state).style.display = 'block';
}

/* stage 1:
    set mission control: Prepare to Launch, button 'Start count down naar stage 2
    set rocket state: 1
*/
function set_stage_1() {
    set_mission_control("Prepare to Launch", "Start countdown naar stage 2", set_stage_2);
    set_rocket_state(1);
    
}

/* stage 2:
    set mission control: Counting down, button Abort click naar stage 1
    set rocket state: 2
    start timed event: na 5 seconden rocket state: 3
    start coundown event: na 10 seconden naar stage 3
*/
function set_stage_2() {

}

/* stage 3:
    set mission control: Lift off!
    set rocket state: 4
    start timed event: na 3 seconden naar stage 4
*/
function set_stage_3() {

}

/* stage 4:
    set mission control: Add more power, button Boost rocket click naar stage 5
    set rocket state: 5
    start countdown event: na 2 seconden naar stage 6
*/
function set_stage_4(){

}

/* stage 4:
    set mission control: Rocket away
    set rocket state: 6
    start timed event: na 2 seconden rocket state 8 en een countdown van 3 seconden met Restarting in... die naar stage 1 gaat
*/
function set_stage_5() {

}

/* stage 6:
    set mission control: Rocket exploded
    set rocket state: 7
    start timed event: na 3 seconden zelfde titel, try again button naar stage 1
*/
function set_stage_6() {

}

// voer een functie (event) uit na x seconden, zonder count down
function start_timed_event(seconds, event) {

}

// voer een functie (event) uit na x seconden, met count down
function start_countdown_event(seconds, event){

}

// set sage 1 on page load
set_stage_1();