$(document).ready(function() {

    var correctCount = 0;
    var incorrectCount = 0;
    var unansweredCount = 5;

    var timeCount = 25;
    var intervalID;

    var radioInputs = $(":radio");
    // console.log(radioInputs[0].value);

    function startGame() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    };

    function decrement() {
        timeCount--;
        $("#time-remaining").text("Time remaining: " + timeCount);
        if (timeCount === 0) {
          calculateScore();
        };
    };

    function calculateScore() {
        clearInterval(intervalID);

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

        alert("All done! You answered " + correctCount + " questions correctly, " + incorrectCount + 
            " questions incorrectly, and you did not answer " + unansweredCount + " questions.");
    };
    
    $(".btn").on("click", function() {
        // preventDefault();
        calculateScore();
    });
    
    // startGame();

});


