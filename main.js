var randomNumber=Math.floor(Math.random()*500)+1;
var guesses=document.querySelector(".guesses");
var lastrresult=document.querySelector(".lastresult");
var loworhi=document.querySelector(".loworhi");
var guesssubmit=document.querySelector(".guesssubmit");
var guessfield=document.querySelector(".guessfield");
var guesscount=1;
var resetbtn;
guessfield.focus();

function checkguess(){
    var userguess=Number(guessfield.value);
    if(guesscount==1){
        guesses.textContent="previous game: ";
    }
    guesses.textContent+=userguess+' ';
    if(userguess===randomNumber){
        lastrresult.textContent="congratulations you got it right";
        lastrresult.style.backgroundColor="green";
        loworhi.textContent=' ';
        setGameOver();
    }
    else if(guesscount===10){
        lastrresult.textContent="!!! Game over !!!";
        loworhi.textContent='';
        setGameOver();
    }
    else{
        lastrresult.textContent="wrong ";
        lastrresult.style.backgroundColor="red";
        if(userguess<randomNumber){
            loworhi.textContent='Last guess was too low';
        }
        else if(userguess>randomNumber){
            loworhi.textContent="last guess was too high";
        }
    }
    guesscount++;
    guessfield.value='';
    guessfield.focus();
}
guesssubmit.addEventListener('click',checkguess);
function setGameOver(){
    guessfield.disabled=true;
    guesssubmit.disabled=true;
    resetbtn=document.createElement('button');
    resetbtn.textContent="start a new game";
    document.body.appendChild(resetbtn);
    resetbtn.addEventListener('click',resetgame);

}

function resetgame(){
    guesscount=1;   
    var resetParas=document.querySelectorAll(".resultParas p");
    for( var i=0;i<resetParas.length;i++){
        resetParas[i].textContent='';
    }
    resetbtn.parentNode.removeChild(resetbtn);
    guessfield.disabled=false;
    guesssubmit.disabled=false;
    guessfield.value='';
    guessfield.focus();
    randomNumber=Math.floor(Math.random()*500)+1;
}