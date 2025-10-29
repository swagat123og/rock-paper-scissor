//for accesing the elemnts

let compt_score=0;

let player_score=0;

const choices=document.querySelectorAll('.choice');

const msg=document.querySelector("#msg");

const msg_container=document.querySelector(".msg-container");

const user_score=document.querySelector("#user_score");

const comp_score=document.querySelector("#comp_score");

// function section for the events


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const user_id=choice.getAttribute("id");
        playgame(user_id);   
    });
});


const get_comp_id=()=>{
    const arr=["rock","paper","scissors"];
    const random_choice=Math.floor(Math.random()*3);
    return arr[random_choice];

};


const playgame=(user_id)=>{
    const comp_id=get_comp_id();
    if(user_id===comp_id){
        game_draw(comp_id,user_id);
    }else{
        let user_wineer=true;
        if(user_id==="rock"){
            user_wineer= comp_id==="paper"?false:true;
        }else if(user_id==="paper"){
            user_wineer= comp_id==="scissors"?false:true;
        }else{
            user_wineer= comp_id==="rock"?false:true;
        }
        wineer_func(user_wineer,comp_id,user_id);
    }
};


const game_draw=(comp_id,user_id)=>{
    msg.innerText=`its a draw! both chose ${user_id}`;
    msg.style.backgroundColor="#66CCCC";
};

const wineer_func=(user_wineer,comp_id,user_id)=>{
    if(user_wineer){
        player_score++;
        user_score.innerText=player_score;
        msg.innerText=`you win! ${user_id} beats ${comp_id}`;
        msg.style.backgroundColor="#32CD32";
    }else{
        compt_score++;
        comp_score.innerText=compt_score;
        msg.innerText=`you lose! ${comp_id} beats ${user_id}`;
        msg.style.backgroundColor="#FF0000";
    }
};



