function gamerun() {
    document.getElementById("paragraph").innerHTML = "Welcome to the Random Number Game!";
    document.getElementById("paragraph").style.backgroundColor = "white";
    document.getElementById("paragraph").style.color = "black";
    document.getElementById("paragraph").style.padding = "15px";
    document.getElementById("paragraph").style.textAlign = "center";
    randomNum();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("rannum");
    x.innerHTML = ran;
    x.style.backgroundColor ="white";
    x.style.color = "black";
    x.style.padding = "30px";
    x.style.textAlign = "center";

}