let isStart = false;
let level = 0;
let colors = ["red","green","yellow","blue"];
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let container = document.querySelector(".container");
let compList = [];
let userList = [];
let reset = document.querySelector("#reset");

document.addEventListener("keypress",()=>{
    if(!isStart){
        isStart=true;
        flashColor();
    }
}) 
function flashColor(){
    userList=[];
    level++;
    let temp = `Level ${level}`;
    h3.innerHTML=temp;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = colors[randIdx];
    compList.push(randColor);
    let box = document.querySelector(`.${randColor}`);
    box.classList.add("white");

    setTimeout(() => {
        box.classList.remove("white");
    }, 250);

}
function check(idx){
    if(userList[idx]===compList[idx]){
        if(idx==compList.length-1){
            setTimeout(flashColor,250);
        }
    }else{
        set();
        let body = document.querySelector("body");
        body.classList.add("red");
        setTimeout(()=>{
           body.classList.remove("red");
        },100);
    }
}
container.addEventListener("click",(e)=>{
    userList.push(e.target.getAttribute("id"));
    e.target.classList.add("grey");
    setTimeout(()=>{
        e.target.classList.remove("grey");
    },100);
    userGen();
})
function userGen(){
    let index = userList.length-1;
    check(index);
}
const set = ()=>{
    h3.innerHTML="New Game <br> press any key to start game.";
    isStart=false;
    level=0;
    compList=[];
}
reset.addEventListener("dblclick",set);