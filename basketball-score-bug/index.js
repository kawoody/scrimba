// SCORE
const scoreHomeEl = document.getElementById("score-home");
const scoreVisitorEl = document.getElementById("score-visitor");

const allButtons = document.querySelectorAll(".score-btn");

allButtons.forEach(btn => btn.addEventListener("click", e => renderScore(e)));

// UPDATE QUARTER

const qtrEl = document.getElementById("qtr-display");

qtrEl.addEventListener("click", updateQuarter);

// RESET FOR NEW GAME

const resetEl = document.getElementById("reset");

resetEl.addEventListener("click", resetGame)

// FUNCTIONS


// Render score
function renderScore(e) {
    updateScore(createVariables(e));
    highlightLeader(checkLeader(createVariables(e)));
}

// Get all necessary elements, IDs, values and return as an object
function createVariables(e) {
    let btn = e.target;
    let btnID = btn.id;
    let btnTeam = btn.parentElement.parentElement.id;
    let btnPointValue = Number(btnID.charAt(btnID.length-1));
    let scoreHome = Number(scoreHomeEl.textContent);
    let scoreVisitor = Number(scoreVisitorEl.textContent);
    
    return {btn, btnTeam, btnPointValue, scoreHome, scoreVisitor}
}

// Update the score display
function updateScore(btnObject) {
    let {btnTeam, scoreHome, scoreVisitor, btnPointValue} = btnObject;
    
    if (btnTeam == "home") {
        let score = scoreHome;
        score += btnPointValue;
        scoreHomeEl.textContent = score;
    } else {
        let score = scoreVisitor;
        score += btnPointValue;
        scoreVisitorEl.textContent = score;
    }
}

// Figure out who's winning, return as a string
function checkLeader(btnObject) {
    let {scoreHome, scoreVisitor} = btnObject;
    
    if (scoreHome > scoreVisitor) {
        return "home";
    } else if (scoreVisitor > scoreHome) {
        return "visitor";
    } else {
        return "tied";
    }
}

// 
function highlightLeader(leaderStr) {
    if (leaderStr == "tied") {
        scoreHomeEl.classList.remove("leader");
        scoreVisitorEl.classList.remove("leader");
    } else if (leaderStr == "home") {
        scoreHomeEl.classList.add("leader");
        scoreVisitorEl.classList.remove("leader");
    } else {
        scoreVisitorEl.classList.add("leader");
        scoreHomeEl.classList.remove("leader");
    }
}


function updateQuarter() {
    let qtr = qtrEl.textContent.slice(0,1);
    let nextQtrText;
    
    if (qtr == "1") {
        nextQtrText = "2nd";
    } else if (qtr == "2") {
        nextQtrText = "3rd";
    } else if (qtr == "3") {
        nextQtrText = "4th";
    } else {
        nextQtrText = "1st";
    }
    
    qtrEl.innerHTML = `${nextQtrText.slice(0,1)}<span class="super">${nextQtrText.slice(1)}</span>`
}


function resetGame() {
    scoreHomeEl.textContent = "0";
    scoreVisitorEl.textContent = "0";
    
    scoreHomeEl.classList.remove("leader");
    scoreVisitorEl.classList.remove("leader");
    
    qtrEl.innerHTML = `1<span class="super">st</span>`
}