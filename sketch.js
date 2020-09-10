$("#pick").hide()
$("#container").hide()

$("#containerOneClicked").hide()
$("#containerTwoClicked").hide()
$("#containerThreeClicked").hide()

$("#AIrock").hide()
$("#AIpaper").hide()
$("#AIscissors").hide()

$("#drawMessage").hide()
$("#winMessage").hide()
$("#loseMessage").hide()

var clickedIcon;

function buttonClicked() {
    $("#startButton").hide()
    $("#pick").show()
    $("#container").show()
}

function rockClick() {
    $("#containerOneClicked").show()
    $("#pick").hide()
    $("#containerTwoClicked").hide()
    $("#containerThreeClicked").hide()

    clickedIcon = "rock";
    decision();
}

function paperClick() {
    $("#containerTwoClicked").show()
    $("#pick").hide()
    $("#containerOneClicked").hide()
    $("#containerThreeClicked").hide()

    clickedIcon = "paper";
    decision();
}

function scissorsClick() {
    $("#containerThreeClicked").show()
    $("#pick").hide()
    $("#containerOneClicked").hide()
    $("#containerTwoClicked").hide()

    clickedIcon = "scissors";
    decision();
}


function decision() {
    setTimeout(function () {
        $("#containerOneClicked").hide()
        $("#containerTwoClicked").hide()
        $("#containerThreeClicked").hide()
    }, 1000)

    var botDecision = Math.floor(Math.random() * 3) + 1;

    setTimeout(function () {
        if (botDecision == 1) {
            var botChosen = "rock";
            $("#AIrock").show()
        } else if (botDecision == 2) {
            var botChosen = "paper";
            $("#AIpaper").show()
        } else {
            var botChosen = "scissors";
            $("#AIscissors").show()
        }
    }, 1000)

    setTimeout(function () {
        $("#AIrock").hide()
        $("#AIpaper").hide()
        $("#AIscissors").hide()

        if (clickedIcon == botChosen) {
            $("#drawMessage").show()
        } else if (clickedIcon == "rock" && botChosen == "scissors") {
            $("#winMessage").show()
        } else if (clickedIcon == "paper" && botChosen == "rock") {
            $("#winMessage").show()
        } else if (clickedIcon == "scissors" && botChosen == "paper") {
            $("#winMessage").show()
        } else if (clickedIcon == "rock" && botChosen == "paper") {
            $("#loseMessage").show()
        } else if (clickedIcon == "paper" && botChosen == "scissors") {
            $("#loseMessage").show()
        } else {
            $("#loseMessage").show()
        }

    }, 2000)
}

