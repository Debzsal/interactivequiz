var startEl = document.getElementById("start");
var hide =  document.getElementsByClassName("hide");
var questionspage = document.getElementById("questions");
var startscreen = document.getElementById("start-screen");


startEl.addEventListener("click", myfunction);

console.log(startEl);

function myfunction() {
    startscreen.style.display = "none";
//     questionsEl;
// const hide = document.getElementsByClassName('hide');
// questionsEl.style.display = "none";
questionspage.removeAttribute("class");

displayquestions();
}

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
        
        choicelist.appendChild(li1);
        choicelist.appendChild(li2);
        choicelist.appendChild(li3);
   
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
            choicelist.textContent = message;
            
        }
    }
}
    }
