const minNum = 1;
const maxNum= 100;
const answer= Math.floor(Math.random() * (maxNum- minNum + 1));


console.log(answer)

let attempt = 0;
let guess;
let running = true 

while(running ){
guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
   guess= Number(guess)
 
if (isNaN(guess)){
    window.alert("please enter a valid number ");

}
else if( guess< minNum || guess > maxNum  ){
    window.alert("please enter a valid number ")

} 

else{
    attempt ++
    if (guess < answer){
        window.alert("too low ")

    }
    else if (guess > answer ){
        window.alert("Too high")
    }
    else if (guess === answer)
        !window.alert(`Well done! it took you ${attempt} number of attempts  `)
    running===false
}
   
}