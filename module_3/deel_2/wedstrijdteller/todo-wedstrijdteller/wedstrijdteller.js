var inputTeams = document.getElementById('input-teams');
var resetButton = document.getElementById('resetButton');
var setWinsElement = document.getElementById('setCounter');
var lastScoringTeam = null;
var lastServingTeamNow = null; // serving now
var lastServingTeamPrevious = null; // serving previous
var setTeller = 1;
var setWinsTeam1 = 0;
var setWinsTeam2 = 0;

const MAXSET = 3

function start(event){
    // als 1 van de namen niet gevuld return 
    if (inputTeam1.value.trim() == "" || inputTeam2.value.trim() == "") { alert("vul een team in")
        return;

      } else {
        inputTeams.style.display = "none";
        alert("gestart");
        counterTeam1.counter = 0;
        counterTeam2.counter = 0;
        setTeller = 1;
        displayNames();
        displayCounters();
        startServing()
        counterTeam1.addEventListener('click',count);
        counterTeam2.addEventListener('click',count);
        undoButton.addEventListener('click', undo);
        resetButton.addEventListener('click', reset);
        
      }
}
function undo(event){
  if(lastScoringTeam === null) return;
 lastScoringTeam.counter--;
 displayCounters();
 lastScoringTeam = null;
 lastServingTeamNow = lastServingTeamPrevious;
 lastServingTeamPrevious = null;
 displayserving(lastServingTeamNow)
}

function reset() {
  alert("spel gestopt")
    location.reload();
}

function displayCounters(){
  counterTeam1.textContent = counterTeam1.counter;
  counterTeam2.textContent = counterTeam2.counter;
}

function startServing(){
  if (!servingTeam2.checked){
    displayserving(counterTeam1);
    lastServingTeamNow = counterTeam1
  } else if (servingTeam2.checked){
    displayserving(counterTeam2);
    lastServingTeamNow = counterTeam2
  }

}

function displayserving(teamCounter){
  counterTeam1.classList.remove("serving"); // verwijder class serving eerst counter
  counterTeam2.classList.remove("serving"); // verijder class servinge tweede counter
  teamCounter.classList.add("serving") // voeg class serving toe voor de meegeven counter
}

startButton.addEventListener('click',start);





function count(event){
  this.counter++;
  displayCounters();
  displayserving(this);
  lastScoringTeam = this;
  lastServingTeamPrevious = lastServingTeamNow;
  lastServingTeamNow = this;

  checkSetWin(this);

}

function checkSetWin(teamCounter){
  if (teamCounter.counter >= 25 && Math.abs(counterTeam1.counter - counterTeam2.counter) >= 2) {
    alert("Set " + setTeller + " gewonnen door " + (teamCounter === counterTeam1 ? inputTeam1.value : inputTeam2.value));
      if (teamCounter === counterTeam1) {
        setWinsTeam1++;
      }else {
        setWinsTeam2++;
      }

      setTeller++;
      setWinsElement.textContent = `Setstand: ${setWinsTeam1} - ${setWinsTeam2}`;
      counterTeam1.counter = 0;
      counterTeam2.counter = 0;
      displayCounters();
      winner();
  }
}

function winner() {
  if (setWinsTeam1 === MAXSET) {
    alert(inputTeam1.value + " heeft het spel gewonnen");
    location.reload();
  } else if (setWinsTeam2 === MAXSET) {
    alert(inputTeam2.value + " heeft het spel gewonnen!");
    location.reload();
  } else {
    return;
  }
}

function displayNames(event){
    nameTeam1.textContent = inputTeam1.value.trim() || "....";
    nameTeam2.textContent = inputTeam2.value.trim() || "...";   

}

inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);

