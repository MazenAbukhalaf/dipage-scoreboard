function submitForm() {
    var teamNames = new Array(document.getElementById("teamonename").value, document.getElementById("teamtwoname").value, document.getElementById("teamthreename").value, document.getElementById("teamfourname").value, document.getElementById("teamfivename").value, document.getElementById("teamsixname").value);
    var teamScores = new Array(document.getElementById("teamonescore").value, document.getElementById("teamtwoscore").value, document.getElementById("teamthreescore").value, document.getElementById("teamfourscore").value, document.getElementById("teamfivescore").value, document.getElementById("teamsixscore").value);
    var teamColors = new Array(document.getElementById("teamonecolor").value, document.getElementById("teamtwocolor").value, document.getElementById("teamthreecolor").value, document.getElementById("teamfourcolor").value, document.getElementById("teamfivecolor").value, document.getElementById("teamsixcolor").value);
    var showBKG = document.getElementById("nobkg").value;
    var showName = document.getElementById("showname").value;
    console.log(teamNames);
    localStorage.setItem('teamNamesLocal', JSON.stringify(teamNames));
    console.log(teamScores);
    localStorage.setItem('teamScoresLocal', JSON.stringify(teamScores));
    console.log(teamColors);
    localStorage.setItem('teamColorsLocal', JSON.stringify(teamColors));
    console.log(showName);
    localStorage.setItem('showNameLocal', JSON.stringify(showName));
    console.log(showBKG);
    localStorage.setItem('showBackgroundLocal', JSON.stringify(showBKG));
    //scoreform.submit(); // Submit the form
    return false; // Prevent page refresh
}
