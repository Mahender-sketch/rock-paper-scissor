let userscore = 0;
let compscore = 0;
const user_score=document.querySelector("#scoreus");
const comp_score=document.querySelector("#scorecomp");
let msg= document.querySelector("#msg");
const choices= document.querySelectorAll(".img");
const genComchoice=()=>{
    const option =["r1", "p2", "s3"];
    let optionnum=Math.floor(Math.random()*3);
    return(option[optionnum]);
}
const drawgame=()=>{
    console.log("the match was draw");
    msg.innerText="Match was draw/ play again";
    msg.style.backgroundColor=" rgb(10, 30, 71)";
};
let showwinner=(i)=>{
    if(i){
        userscore++;
        user_score.innerText=userscore;
        // console.log("user won");
        msg.innerText="User won";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comp_score.innerText=compscore;
        // console.log("comp won");
        msg.innerText="Comp won";
        msg.style.backgroundColor="red";
    }
}
// console.log(genComchoice());
const playgame=(user_id)=>{
    console.log( "user choice",user_id);
    const compchoice= genComchoice();
    // console.log("computer choice", compchoice);
    if(user_id==compchoice){
        drawgame();
    }
    else{
        let userc= true;
        if(user_id==="r1"){
            userc= compchoice === "p2" ? false : true ;
        }
        else if( user_id==="p2"){
            userc = compchoice=== "s3"? false : true;
        }
        else{
            userc= compchoice==="r1"? false : true;
        }
        showwinner(userc);
        }
};

choices.forEach((i)=>{
    // console.log(i);
    i.addEventListener("click",()=>{
        const user_id= i.getAttribute("id");
        // console.log("choice_id);
        // console.log("choice was clicked", user_id);
        playgame(user_id);
    })
})
