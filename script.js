function autoUpdate() {
    setInterval(function() { ObserveInputValue($('#showname').val()); }, 100);
}
function submitForm() {
    var teamNames = new Array(document.getElementById("teamonename").value, document.getElementById("teamtwoname").value, document.getElementById("teamthreename").value, document.getElementById("teamfourname").value, document.getElementById("teamfivename").value, document.getElementById("teamsixname").value);
    var teamScores = new Array(document.getElementById("teamonescore").value, document.getElementById("teamtwoscore").value, document.getElementById("teamthreescore").value, document.getElementById("teamfourscore").value, document.getElementById("teamfivescore").value, document.getElementById("teamsixscore").value);
    var colorSelector = document.getElementById("colsel").value;
    var colorSelector2 = document.getElementById("colsel2").value;
    // var fontSize = document.getElementById("fontsize").value;
    // var titleSize = document.getElementById("titlesize").value;
    if (document.getElementById('nobkg').checked) {
        var showBKG = "on";
    } else {
        var showBKG = "off";
    }
    if (document.getElementById('notxt').checked) {
        var showTXT = "on";
    } else {
        var showTXT = "off";
    }
    var showName = document.getElementById("showname").value;
    console.log(teamNames);
    localStorage.setItem('teamNamesLocal', JSON.stringify(teamNames));
    console.log(teamScores);
    localStorage.setItem('teamScoresLocal', JSON.stringify(teamScores));
    console.log(showName);
    localStorage.setItem('showNameLocal', JSON.stringify(showName));
    console.log(showBKG);
    localStorage.setItem('showBackgroundLocal', JSON.stringify(showBKG));
    console.log(showTXT);
    localStorage.setItem('showTextLocal', JSON.stringify(showTXT));
    // localStorage.setItem('fontSizeLocal', fontSize + 'px');
    // console.log(localStorage.getItem("fontSizeLocal"));
    // localStorage.setItem('titleSizeLocal', titleSize + 'px');
    // console.log(localStorage.getItem("titleSizeLocal"));
    console.log(colorSelector);
    localStorage.setItem('colorSelectorLocal', JSON.stringify(colorSelector));
    console.log(colorSelector2);
    localStorage.setItem('colorSelector2Local', JSON.stringify(colorSelector2));
    document.getElementById("updated").style.display = "block";
    //scoreform.submit(); // Submit the form
    return false; // Prevent page refresh
}

function enableAdvanced() {
    var x = document.getElementById("advancedoptions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function clearContents() {
    window.location.reload(true);
}