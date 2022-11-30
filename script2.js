function submitForm() {
}
setInterval(function(){
    var storedShowName = JSON.parse(localStorage.getItem('showNameLocal'));
    document.getElementById('showname').textContent = storedShowName;
    var storedTeamNames = JSON.parse(localStorage.getItem('teamNamesLocal'));
    var storedTeamScores = JSON.parse(localStorage.getItem('teamScoresLocal'));
    var storedTeamColors = JSON.parse(localStorage.getItem('teamColorsLocal'));
    var storedShowBKG = JSON.parse(localStorage.getItem('showBackgroundLocal'));
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
        console.log("YO");
    } else {
        console.log("YO2")
    }
},3000);