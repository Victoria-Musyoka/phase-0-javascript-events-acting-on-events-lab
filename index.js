// Your code here
const dodger = document.getElementById('dodger');
document.addEventListener("keydown",function(event){
    if(event.key==="ArrowRight"){
        moveDodgerRight()
    }
    if(event.key==="ArrowLeft"){
        moveDodgerLeft();
    }
})
dodger.style.backgroundColor = "#FF69B4"

function moveDodgerLeft(){
    const leftReplace = dodger.style.left.replace("px", "");
    const left = parseInt(leftReplace,10);
    if(left>0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const leftReplace = dodger.style.left.replace("px","");
    const right = parseInt(leftReplace,10)
    if(right<260){
        dodger.style.left= `${right + 1}px`;
    }
}