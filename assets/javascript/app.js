$(document).ready(function() {

    var correctCount = 0;
    var incorrectCount = 0;
    var unansweredCount = 5;

    var timeCount = 60;
    var intervalID;

    var radioInputs = $(":radio");

    function startGame() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    };

    function decrement() {
        timeCount--;
        $("#time-remaining").text("Time remaining: " + timeCount + " s");
        if (timeCount === 0) {
          calculateScore();
        };
    };

    function calculateScore() {
        clearInterval(intervalID);
        $("#submit-button").css("visibility", "hidden");

        for (var i = 0; i < radioInputs.length; i++) {
            if (radioInputs[i].checked === true) {
                unansweredCount--;
                if (radioInputs[i].value === "correct") {
                    correctCount++;
                } else {
                    incorrectCount++;
                };
            };
        };

        alert("All done! You answered " + correctCount + " question(s) correctly, " + incorrectCount + 
            " question(s) incorrectly, and you did not answer " + unansweredCount + " question(s).");
    };

    $("#start-button").on("click", function() {
        $(".container").css("visibility", "visible");
        $(this).css("visibility", "hidden");
        startGame();
    });
    
    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        calculateScore();
    });

});


