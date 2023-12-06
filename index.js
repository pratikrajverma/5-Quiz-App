// we are making our question data (means backend data)
const question = [
    {
        "que" : "fetch() function is use for... ?",
        "opt1" : "UI design",
        "opt2" : "making object",
        "opt3" : "building logic",
        "opt4" : "calling API",
        "correct": "opt4"
    },

    {
        "que" : "Async function is use for... ?",
        "opt1" : "making array",
        "opt4" : "making it easier to manage asynchronous tasks",
        "opt2" : "making callback hell",
        "opt3" : "fetching server data",
        "correct": "opt4"
    },

    {
        "que" : "what is the two arguments of promise ?",
        "opt1" : "x,y",
        "opt2" : "get, set",
        "opt3" : "resolve, reject",
        "opt4" : "then, catch",
        "correct": "opt3"
    },

    {
        "que" : "what is JSON ?",
        "opt3" : "javascript object library",
        "opt1" : "javascript function",
        "opt4" : "javascript object notaion",                      
        "opt2" : "javascript note",
        "correct": "opt4"
    },

    {
        "que" : "which is markup language ?",
        "opt1" : "javascript",
        "opt2" : "HTML",
        "opt3" : "Python",
        "opt4" : "CSS",
        "correct": "opt2"
    }

];



const queBox = document.querySelector("[queBox]");
const options = document.querySelectorAll("input");

let index=0;
let right=0;
let wrong=0;
let noAttempt=0;
let total= question.length;
let data;


function loadQuestion()
{
    resetOption();
    if(index === total)
    {
        endQuiz();
    }
    data = question[index];
    queBox.innerText = `${index+1}.   ${data.que}`;

    options[0].nextElementSibling.innerText = data.opt1;
    options[1].nextElementSibling.innerText = data.opt2;
    options[2].nextElementSibling.innerText = data.opt3;
    options[3].nextElementSibling.innerText = data.opt4;
    
}

loadQuestion();



// ye submit button  ka function he jo user ka input lene ke bad karenge
function submit()
{
    const ans = getAnswer();

    if(ans === data.correct)
    {
        right++;
    }
    else if(ans===""){
        noAttempt++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
}


// ye user ka input value lega 
function getAnswer()
{
    const answer="";
    options.forEach((input)=>{
        if(input.checked)
        {
            answer = input.value;
        }
    })
    return answer;
}


// ye all option ko reset karega
function resetOption()
{
    options.forEach((input)=>{
        input.checked = false;
    })
}



//ye result show karega
function endQuiz()
{
   document.querySelector(".content").innerHTML = `
   
        <div class="result">
            <h1>Thankyou for playing Quiz :)</h1>
            <h1>Total : ${total}</h1>
            <h1 right>Right : ${right}</h1>
            <h1 wrong>Wrong : ${wrong}</h1>
            <h1 noAttempt>No attempt : ${noAttempt}</h1>
        </div>

    ` 
}