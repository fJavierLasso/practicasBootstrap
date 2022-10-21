
let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);

document.querySelector("h1").textContent = 
(randomNumber1>randomNumber2)?"Player 1 Wins!":(randomNumber2>randomNumber1)?"Player 2 Wins":"Its a Draw!";