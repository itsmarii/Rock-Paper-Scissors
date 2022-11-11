
const currentpointuser = document.getElementById("scoreuser") ;
const currentpointcomp = document.getElementById("scorecomp") ;
const currentpointtie = document.getElementById("tie") ; 
let comppoint = 0;
let userpoint = 0;
let tie = 0;
let rounds = 0;
console.log(currentpointcomp) ; 
console.log(currentpointuser) ;

function roundcheck(userinput){
    if (rounds <= 5)
        playRound(userinput)
    else{
        if(comppoint > userpoint)
            currentpointcomp.innerHTML = 'Winner';
            currentpointuser.innerHTML = 'Loser';
            currentpointtie.innerHTML = ""
        if(userpoint > comppoint)
            currentpointuser.innerHTML = 'Winner';
            currentpointcomp.innerHTML = 'Loser';
            currentpointtie.innerHTML = ""
        if(comppoint == userinput)
            currentpointtie.innerHTML = "I guess it's not meant to be"
    }
}

function inputrock(){
    userinput = "Rock" ;
    roundcheck(userinput)
    
}

function inputscissor(){
    userinput = "Scissors" ;
    roundcheck(userinput)

}

function inputpaper(){
    userinput = "Paper" ; 
    roundcheck(userinput)

}


function scorechange(winner){
    console.log("winner "+winner)
   // 0 is tie 1 is comp 2 is user 
    if (winner == '1' )
        ++comppoint
        currentpointcomp.innerHTML = comppoint;
        console.log("Computer won");
    if(winner == '2')
        ++userpoint
        currentpointuser.innerHTML = userpoint;
        console.log("user won");
    if(winner == '0')
        ++tie
        currentpointtie.innerHTML = tie;
        console.log("tie");


}

function getcomputerChoise(){
    const choices =["Rock","Paper","Scissors"];
    random = Math.floor((Math.random()*(2 -1 +1) + 1)) ;
    choise = choices[random] ;
    console.log("choice comptuer made:"+choise);
    return choise
}

function playRound(userinput){
       // 0 is tie 1 is comp 2 is user
    ++rounds
    console.log("User choice: "+ userinput);
    choice = getcomputerChoise()
    if (userinput == choise){
        scorechange('0');
        console.log("This went into tie");
    }

    if (userinput == "Rock" && choise == "Paper")
        scorechange('1');
    else if(userinput == "Paper" && choise == "Rock"){
        scorechange('2');
        console.log("This went into Another");
    }
    
    if (userinput == "Paper" && choise == "Scissors")
        scorechange('1');
    else if (userinput == "Scissors" && choise == "Paper"){
        scorechange('2');
    }

    if (userinput == "Rock" && choise == "Scissors")
        scorechange('2');
    else if(userinput == "Scissors" && choise == "Rock"){
        scorechange('1');
    }
    
    
}


