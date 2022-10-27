
const currentpointuser = document.getElementById("scoreuser") ;
const currentpointcomp = document.getElementById("scorecomp") ;
console.log(currentpointcomp) ; 
console.log(currentpointuser) ;

function inputrock(){
    userinput = "Rock" ;
    playRound(userinput)
}

function inputscissor(){
    userinput = "Scissors" ;
    playRound(userinput)

}

function inputpaper(){
    userinput = "Paper" ; 
    playRound(userinput)

}


function scorechange(x){
   // 0 is tie 1 is comp 2 is user 
   if (x == "1" )
    currentpointcomp.innerHTML = '3';

}

function getcomputerChoise(){
    const choices =["Rock","Paper","Scissors"];
    random = Math.floor(Math.random()*(3 -1 +1)) + 1
    choise = choices[random]
    console.log("choice comptuer made"+choise);
    return choise
}

function playRound(userinput){
    choice = getcomputerChoise()
    if (userinput == choise)
        scorechange(0);
    if (userinput == "Rock" && choise == "Paper")
        scorechange(1);
    else{
        scorechange(2);
    }
    if (userinput == "Paper" && choise == "Scissors")
        scorechange(1);
    else{
        scorechange(2);
    }

    if (userinput == "Rock" && choise == "Scissors")
        scorechange(2);
    else{
        scorechange(1);
    }
    
    
}

function game(playRound){
    for(let i = 0; i<5 ; i++){

    }
}
