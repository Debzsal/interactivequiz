var startEl = document.getElementById("start");
var hide =  document.getElementsByClassName("hide");
var questionspage = document.getElementById("questions");
var startscreen = document.getElementById("start-screen");
var timerEl = document.getElementById("time");




startEl.addEventListener("click", myfunction);

console.log(startEl);

function myfunction() {
    startscreen.style.display = "none";
//     questionsEl;
// const hide = document.getElementsByClassName('hide');
// questionsEl.style.display = "none";
questionspage.removeAttribute("class");

displayquestions();

function countdown() {

    var timeLeft = 75;

    var timeInterval = setInterval(function ()  {
        if(timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft;
            timeLeft--;

        } else if (displaymessage("Wrong")) {
            timeLeft -10000;
        
        } else {
                // Once `timeLeft` gets to 0, set `timerEl` to an empty string
                timerEl.textContent = '';
                // Use `clearInterval()` to stop the timer
                clearInterval(timeInterval);
            }

        },

            
            
        75000);
    }
}

countdown();


function displayquestions() {
    for( i = 0; i < questions.length; i++) {
    console.log(questions[i]);

    var title = document.getElementById("question-title");
    title.textContent = questions[i].question;
    

    }
    displayOptions();
}
function displayOptions() {
    for( q = 0; q < questions.length; q++) {
        console.log(questions[q]);

        var choicelist = document.getElementById("choices");
        var li1 = document.createElement("button");
        var li2 = document.createElement("button");
        var li3 = document.createElement("button");
        var heading = document.createElement("h2");
        
        choicelist.appendChild(li1);
        choicelist.appendChild(li2);
        choicelist.appendChild(li3);
        choicelist.appendChild(heading);
   
        li1.textContent = questions[q].options[0];
        li2.textContent = questions[q].options[1];
        li3.textContent = questions[q].options[2];

        choicelist.addEventListener("click", showme);

        function showme(event) {
            li2 = event.target
            console.log(li2);
            li2.innerHTML
        

            for( x = 0 ; x < questions.length; x++){
                
            }
            // this is defining
            console.log(questions[0].answer);

            if(li2.innerHTML === questions[0].answer) {
                displaymessage("Correct!");
            }
            else {
                displaymessage("Wrong");   
        }

        function displaymessage( message) {
            heading.textContent = message;
            
        }
        countdown();
    }
}
    }
