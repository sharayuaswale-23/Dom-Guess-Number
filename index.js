let numberEl = document.getElementById("number");
let errormsgEl = document.getElementById("errormsg");

let randomnum;
let count = 0;
function randomnumberfnt(){
    randomnum = Math.ceil(Math.random()*100);
}

randomnumberfnt();
console.log(randomnum);

function checknumber(){
    count += 1;
    let value = parseInt(numberEl.value);
    if(value > randomnum){
        errormsgEl.textContent = "Number is too High!!! Try Again.";
    }
    else if(value < randomnum){
        errormsgEl.textContent = "Number is too Low!!! Try Again.";
    }
    else{
        errormsgEl.textContent = `Hurray!!! You Won. You Guessed it in ${count} attempts.`;
        errormsgEl.style.color = "green";
    }

}

function resetbtn(){
    randomnumberfnt();
}