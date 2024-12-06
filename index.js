// Scoreboard

let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let countHome = 0
let countAway = 0 

// HIGHLIGHT THE LEADER 

function updateLeaderDisplay() {
    if (countHome > countAway) {
        homeScore.style.color = "green"
        homeScore.style.fontWeight = "bold"
    } else if (countAway > countHome) {
        awayScore.style.color = "green"
        awayScore.style.fontWeight = "bold"
    } else {
        homeScore.style.color = "#f14c39"
        awayScore.style.color = "#f14c39"
    }
}

// NEW GAME BUTTON

function newGame() {
    countHome = 0 
    countAway = 0
    homeScore.textContent = 0
    awayScore.textContent = 0
    updateLeaderDisplay()
}
 
// ADDING POINTS

// HOME SIDE 

function add1Home() {
    countHome += 1
    homeScore.textContent = countHome
    updateLeaderDisplay()
}

function add2Home() {
    countHome += 2
    homeScore.textContent = countHome
    updateLeaderDisplay()
}

function add3Home() {
    countHome += 3
    homeScore.textContent = countHome
    updateLeaderDisplay()
}

// AWAY SIDE 

function add1Away() {
    countAway += 1
    awayScore.textContent = countAway
    updateLeaderDisplay()
}

function add2Away() {
    countAway += 2
    awayScore.textContent = countAway
    updateLeaderDisplay()
}

function add3Away() {
    countAway += 3
    awayScore.textContent = countAway
    updateLeaderDisplay()
}

// SUBTRACTING POINTS

// HOMESIDE

function sub1Home() {
    countHome -= 1
    homeScore.textContent = countHome
    updateLeaderDisplay()
}

function sub2Home() {
    countHome -= 2
    homeScore.textContent = countHome
    updateLeaderDisplay()
}

function sub3Home() {
    countHome -= 3
    homeScore.textContent = countHome
    updateLeaderDisplay()
}

// AWAY SIDE

function sub1Away() {
    countAway -= 1
    awayScore.textContent = countAway
    updateLeaderDisplay()
}

function sub2Away() {
    countAway -= 2
    awayScore.textContent = countAway
    updateLeaderDisplay()
}

function sub3Away() {
    countAway -= 3
    awayScore.textContent = countAway
    updateLeaderDisplay()
}

