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
                alert("Correct!");
            }
            else {
                alert("Wrong");   
        }
    }
}
        // innerhtml 
        // event.target

        // var btn = document.getElementsByTagName("button").type;
        // for (i = 0; i< choices.children.length; i++) {
        //         choices.children[i].setAttribute("type", "button");
        //     } 


        // choices.setAttribute("type", "button");
        
    }


//     add click to buttons = choicelist.addEventListener("click", showme);
    
    // function showme() {
    //     if(answer = alert ("Correct!"));
    //         else alert("Wrong");



// }

// function addbutton() {
//     li1.setAttribute("type", "button");
//     li2.setAttribute("type", "button");
//     li3.setAttribute("type", "button");
        

// }

        // 


        // choices.textContent = questions[q].options;
        // var list = document.createElement("li");
        // var btn = document.createElement("but");

        // choices.appendChild(list);
        // list.btn.InnerText = questions[q].options;

        // // 
        
        // btn.innerText = questions[q].options;
        // choices.appendChild(btn);
    
    // questions.forEach(Button);
    
// }

// function Button(item) {
//     var btn = document.createElement("but");
//     btn.innerText = questions[q].options;
//     choices.appendChild(btn);  
// }
 
    
    //  btn.innerText = questions[q].options;
    //  
    //  var btn = document.createElement("but");
    //  
    // //  var chs = document.createTextNode(questions[q].options);
    // //  
    // }
    // printBtn();
    
    // displayOptions();

    


// function displayOptions() {
    
//         /
        

        
//     }
// }

// function printBtn() {
//     for( q = 0; q < questions.length; q++) {
     
     
//     //  choices.textContent = 
//     //  code for adding button below
//     // for(x = 0; x < questions[q].options.length; x++) {
        
//     //     var t = d
//     }
// }

    // choices.forEach(addbutton) {
    //     // add button 2 each choice/options

    //  btn.appendChild(choices);   
    // }
    //  => {
    // 
    // }
    // });


    

    // ( q = 0; q < options.length; 1++);

// questionsEl;
// const div = document.querySelector('div');
// div.classList.remove('hide');



// for(var i =0; i < questionsEl.lenght; i++){
//     console.log(questionsEl[i].question);

// write to local storage of logic page and read to local storage on the scores;