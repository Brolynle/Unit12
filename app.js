let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keycode == 32) {
        run(e);
    }
});

userNum.focus();

let counter = 0;

function run() {
    document.getElementById("paragraph").innerHTML = "Welcome to the Random Number Game!";
    document.getElementById("paragraph").style.backgroundColor = "silver";
    document.getElementById("paragraph").style.color = "black";
    document.getElementById("paragraph").style.padding = "15px";
    document.getElementById("paragraph").style.textAlign = "center";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor ="white";
    x.style.color = "black";
    x.style.padding = "30px";
    x.style.textAlign = "center";
    return ran;

}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "black";
    y.style.backgroundColor = "white";
    y.style.padding = "30px";
    y.style.textAlign = "center";
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if (a != b) {
        z.innerHTML = "These numbers aren't the same! The computer got " + b + ", and you got " + a;
        z.style.color = "black";
        z.style.backgroundColor = "white";
        z.style.padding = "30px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times."
        c.style.color = "black";
        c.style.backgroundColor = "white";
        c.style.padding = "30px";
        c.style.textAlign = "center";
    } else if ( a == b) {
        z.innerHTML = "These numbers are the same! The computer got " + b + ", and you got " + a;
        z.style.color = "black";
        z.style.backgroundColor = "white";
        z.style.padding = "30px";
        z.style.textAlign = "center";
    }

    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}

