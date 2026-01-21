const STATES = {
    IDLE: "IDLE",
    PLAYING_SEQUENCE: "PLAYING_SEQUENCE",
    WAITING_FOR_USER: "WAITING_FOR_USER",
    GAME_OVER: "GAME_OVER"
};
let level=0;
let levelUpDelay=800;
let playSequenceDelay=500;
let state = STATES.IDLE;
let gameSequence=[];
let userSequence=[];
let color=["red","green","yellow","purple"]

let h2=document.querySelector("h2");
let btns=document.querySelectorAll(".btn");

document.addEventListener("keydown",startGame);


async function startGame(){
    if(state===STATES.IDLE || state===STATES.GAME_OVER){
        resetGame();
        state=STATES.PLAYING_SEQUENCE;
        await levelUp();
    }
}

function resetGame() {
    level = 0;
    gameSequence = [];
    userSequence = [];
}

function gameOver(){
    h2.innerText=`Game Finish,please enter any key to restart the game!Your Score was ${level}`;
    state=STATES.GAME_OVER;
}

function gameFlash(c) {
    const btn = document.querySelector(`.${c}`);
    btn.classList.add("gameflash");

    setTimeout(() => {
        btn.classList.remove("gameflash");
    }, 300);
}


function userFlash(t) {
    let color=document.querySelector(`#${t}`);
    color.classList.add("userflash");
    setTimeout(function(){color.classList.remove("userflash")},300);
}

async function checkAns(a){
    if(userSequence[a]!==gameSequence[a]){
        gameOver();
    }else if(userSequence.length === gameSequence.length){
        userSequence=[];
        state=STATES.PLAYING_SEQUENCE;
        await delay(levelUpDelay);
        await levelUp(); 
    }
}

function delay(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,delay);
    })
}

async function playSequence(){
    for(let color of gameSequence){
        gameFlash(color);
        await delay(playSequenceDelay);
    }
    state = STATES.WAITING_FOR_USER;
}

async function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let rindx=Math.floor(Math.random()*4);
    let rcolor=color[rindx];
    gameSequence.push(rcolor);

    await playSequence();
}

for(let btn of btns){
    btn.addEventListener("click",async function(event){
        if (state!==STATES.WAITING_FOR_USER) {
            return;
        }   
        let target=event.target.id;
        userFlash(target);
        userSequence.push(target);
        await checkAns(userSequence.length-1);
    });
}


