// 
function heads(){
    document.querySelector(".img").style.visibility="hidden";
    document.querySelector(".top").innerHTML="flipping..." 
    document.querySelector(".img").src= "./heads.png";
    setTimeout(() => {
        document.querySelector(".top").innerHTML="It's heads."
        document.querySelector(".img").style.visibility="visible";
    }, 2000);
}
function tails(){
    document.querySelector(".img").style.visibility="hidden";
    document.querySelector(".top").innerHTML="flipping..." 
    document.querySelector(".img").src= "./tails.png";
    setTimeout(() => {
        document.querySelector(".top").innerHTML="It's tails."
        document.querySelector(".img").style.visibility="visible";
    }, 2000);
}