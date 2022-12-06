const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
function submitForm() {
}
setInterval(function(){
    var storedShowName = JSON.parse(localStorage.getItem('showNameLocal'));
    document.getElementById('showname').textContent = storedShowName;
    var storedTeamNames = JSON.parse(localStorage.getItem('teamNamesLocal'));
    var storedTeamScores = JSON.parse(localStorage.getItem('teamScoresLocal'));
    var storedShowBKG = JSON.parse(localStorage.getItem('showBackgroundLocal'));
    var storedShowTXT = JSON.parse(localStorage.getItem('showTextLocal'));
    var storedColorSelector = JSON.parse(localStorage.getItem('colorSelectorLocal'));
    var storedColorSelector2 = JSON.parse(localStorage.getItem('colorSelector2Local'));
    var storedFontSize = localStorage.getItem('fontSizeLocal');
    var storedTitleSize = localStorage.getItem('titleSizeLocal');
    document.getElementById('11').textContent = storedTeamNames[0];
    document.getElementById('12').textContent = storedTeamScores[0];
    document.getElementById('21').textContent = storedTeamNames[1];
    document.getElementById('22').textContent = storedTeamScores[1];
    document.getElementById('31').textContent = storedTeamNames[2];
    document.getElementById('32').textContent = storedTeamScores[2];
    document.getElementById('41').textContent = storedTeamNames[3];
    document.getElementById('42').textContent = storedTeamScores[3];
    document.getElementById('51').textContent = storedTeamNames[4];
    document.getElementById('52').textContent = storedTeamScores[4];
    document.getElementById('61').textContent = storedTeamNames[5];
    document.getElementById('62').textContent = storedTeamScores[5];
    if (storedShowBKG == "on"){
        document.getElementById("mainbody").style.backgroundColor = storedColorSelector;
    } else {
        document.getElementById("mainbody").style.backgroundColor = "white";
    }
    if (storedShowTXT == "on"){
        document.getElementById("mainbody").style.color = storedColorSelector2;
    } else {
        document.getElementById("mainbody").style.color = "black";
    }
    // console.log("hello " + storedFontSize)
    // addCSS(`#scoreboard{ font-size:${JSON.stringify(storedTitleSize)}; }`);
    // document.getElementById("showname").style.fontSize = storedTitleSize;
    // console.log(storedTitleSize + ", " + storedFontSize);
},3000);