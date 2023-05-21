button = document.getElementsByClassName("round")
text = document.querySelector("h1")
restart = document.getElementsByClassName("restart")
restart[0].style.display = "none";
textprice = document.querySelectorAll("#price")
first_line = document.getElementById("first-line")
second_line = document.getElementById("second-line")
first_line.style.color = "#a3c"
second_line.style.color = "#a3c"
collecters = document.querySelectorAll(".collect")
alerter = document.querySelector("#alert")
timeis = true
deleter = document.querySelectorAll("#delete")
var tree = 0
var student = 0
var frog = 0
var count = 0
var clicks = 0
var live = 0
var price = [10, 100, 500, 100]
var modal = document.getElementById("myModal");
var text_mis = document.getElementById("Missions")
var number1 = 0
var number2 = 0
var number3 = 0
var number4 = 0
var powerclick = 1
missions_count = 0
var counter = document.getElementById("counter")
var ispause = false
var modal2 = document.getElementById("modal")
var retrobg = document.getElementById("retrobg")
missions = [,,,]
rewards = [,,,]
invent = document.getElementById("invent")
inventory = "Nothing"
invent.innerText = inventory
createMissions(1);
createMissions(2);
createMissions(3);
createMissions(4);
function shutdown(){
    if (retrobg.className != "retrobg-shutdown"){retrobg.className="retrobg-shutdown"}
    else{retrobg.className=""}
}
let lastClickTime = 0;

function clicking(x) {
  const now = Date.now();
  if (now - lastClickTime >= x) { // проверяем, прошла ли уже секунда
    if (!ispause) {
      clicks += 1;
      count = +count + powerclick;
      output = count.toFixed(3);
      text.innerText = output + " something";
    }
    lastClickTime = now; // обновляем время последнего вызова функции
  }
}
function buying(id){
switch (id){
case 1:
if(count >= price[0]){
tree +=1
count -= price[0];
price[0] = Math.round(price[0]*1.05)
textprice[0].innerText = "Tree - "+price[0]+" something"};
break;
case 2:
if(count >= price[1]){
student +=1
count -= price[1];
price[1] = Math.round(price[1]*1.05)
textprice[1].innerText = "Student - "+price[1]+" something"};
break;
case 3:
if(count >= price[2]){
frog +=1
count -= price[2];
price[2] = Math.round(price[2]*1.05)
textprice[2].innerText = "Frog - "+price[2]+" something"};
break;
case 4:
if(count >= price[3]){
seconds+=30;
count -= price[3];
price[3] = Math.round(price[3]*1.05)
textprice[3].innerText = "+30 seconds - "+price[3]+" something"};
timer.style.color = "#38d109"
break;
}}
function update(){
if(!ispause && clicks > 0){
const items = [tree, student, frog];
const itemNames = ["tree", "student", "frog"];
let inventory = "";
for (let i = 0; i < items.length; i++) {
if (items[i] > 0) {
inventory += `${items[i]} ${itemNames[i]}\n`;
}}
inventory = inventory.trim();
if (!inventory) {
inventory = "Nothing";
}
invent.innerText = inventory
count = +count + tree *0.0001 + student*0.0005 + frog *0.001
output = count.toFixed(3)
text.innerText = output + " something"
if(timer.textContent == "Time's up!"){
restart[0].style.display = "block";
count = 0
}
if (timeis){
text_mis.innerText = missions[0] + "\nReward: " +rewards[0] +" something\n\n"+missions[1] + "\nReward: " +rewards[1]+nameitem[Math.round(iditem-1)]+"\n\n"+missions[2] + "\nReward: " +rewards[2]+" something\n\n"+missions[3] + "\nReward: x" +rewards[3] + " multiple click"
}
else{text_mis.innerText = missions[0] + "\nReward: " +rewards[0] +" something\n\n"+missions[1] + "\nReward: " +rewards[1]+nameitem[Math.round(iditem-1)]+"\n\n"+missions[3] + "\nReward: x" +rewards[3] + " multiple click"}
counter.innerText = "Complete Missions: " + missions_count
checkMissions()}
}
infinityv = setInterval(update, 1)
let seconds = 30;
const timer = document.getElementById("timer");
let countdown = setInterval(() => {
if (!ispause && clicks > 0){
seconds -= 0.01;
live += 0.01
timer.textContent = seconds.toFixed(2);
if (seconds <= 5.4) {timer.style.color = "#e74c3c"}
if (seconds <= 0) {
clearInterval(countdown);
timer.textContent = "Time's up!";
modal.style.display = "block";
first_line.innerText = "You scored "+count.toFixed(3)+" something"
second_line.innerText = "You have \n''' "+invent.innerText + " '''"
console.log(invent.innerText)
}}
}, 10);

// для сброса обратного отсчета можно добавить кнопку, которая будет вызывать функцию resetCountdown
function resetCountdown() {
clearInterval(countdown);
modal.style.display = "none";
seconds = 30;
timer.textContent = seconds.toFixed(2);
tree = 0;
student = 0;
frog = 0;
count = 0;
clicks = 0
live = 0
number1 = 0;
number2 = 0;
number3 = 0;
number4 = 0;
powerclick = 1;
missions_count = 0;
text_mis.innerText = "To display the missions you need to start the game, good luck"
createMissions(1);
createMissions(2);
createMissions(3);
createMissions(4);
timer.style.color = "#38d109"
price = [10, 100, 500, 100];
restart[0].style.display = "none";
textprice[0].innerText = "Tree - "+price[0]+" something";
textprice[1].innerText = "Student - "+price[1]+" something";
textprice[2].innerText = "Frog - "+price[2]+" something";
textprice[3].innerText = "+30 seconds - "+price[3]+" something";
countdown = setInterval(() => {
if (!ispause && clicks > 0){
seconds -= 0.01;
live += 0.01
timer.textContent = seconds.toFixed(2);

if (seconds <= 0) {
clearInterval(countdown);
timer.textContent = "Time's up!";
modal.style.display = "block";
output = count.toFixed(3)
first_line.innerText = "You scored "+output+" something"
second_line.innerText = "You have \n'''"+invent.innerText + " '''"
}}
}, 10);
}
function createMissions(x){
switch (x) {
case 1:
number1 += getRandomInt(100,300)
missions[0] = "Make " + number1 + " clicks"
rewards[0] = Math.floor(getRandomInt(100,300)/10)
break;
case 2:
number2 += getRandomInt(10,15)
iditem = getRandomInt(1,4)
nameitem = [" Tree"," Students"," Frogs"]
missions[1]="Buy " + Math.round(number2/(iditem**1.4)) + nameitem[Math.round(iditem-1)]
if (iditem == 1){rewards[1]=Math.floor(getRandomInt(10,15)/3)}
else if (iditem == 2){rewards[1]=getRandomInt(2,4)}
else if (iditem == 3){rewards[1]=getRandomInt(1,3)}
break;
case 3:
number3+=100
missions[2] = "Survive "+number3 +" Seconds"
rewards[2] = Math.floor(150+number3)
break;
case 4:
number4+=10
missions[3] = "Complete "+number4 +" Mission"
rewards[3] = powerclick+1
break;
}   
}
function collectMissions(x){
    switch (x) {
    case 1:
    count += +rewards[0];
    output = count.toFixed(3);
    text.innerText = output + " something"
    delete missions[0]
    createMissions(1);
    collecters[0].style.display = "none"
    break;
    case 2:
    if (iditem ==1){tree += +rewards[1]}
    if (iditem ==2){student += +rewards[1]}
    if (iditem ==3){frog += +rewards[1]}
    let inventory = "";
    const items = [tree, student, frog];
    const itemNames = ["tree", "student", "frog"];
    for (let i = 0; i < items.length; i++) {
    if (items[i] > 0) {
    inventory += `${items[i]} ${itemNames[i]}\n`;
    }}
    inventory = inventory.trim();
    invent.innerText = inventory
    delete missions[1]
    createMissions(2)
    collecters[1].style.display = "none"
    break;
    case 3:
    count += +rewards[2];
    output = count.toFixed(3);
    text.innerText = output + " something"
    delete missions[2]
    createMissions(3)
    collecters[2].style.display = "none"
    break;
    case 4:
    powerclick += 1
    delete missions[3]
    createMissions(4)
    collecters[3].style.display = "none"
    break;
    }
    missions_count += 1
    text_mis.innerText = missions[0] + "\nReward: " +rewards[0] +" something\n\n"+missions[1] + "\nReward: " +rewards[1]+nameitem[Math.round(iditem-1)]+"\n\n"+missions[2] + "\nReward: " +rewards[2]+" something\n\n"+missions[3] + "\nReward: x" +rewards[3] + " multiple click"
    counter.innerText = "Complete Missions: " + missions_count
    checkMissions()
    if (clicks < number1 && tree < number2 && live < number3 && missions_count < number4){alerter.style.display ="none"}}

function checkMissions(){
    if (clicks>=number1){collecters[0].style.display = "block";alerter.style.display ="block"}
    if (tree >= number2){collecters[1].style.display = "block";alerter.style.display ="block"}
    if (live >= number3){collecters[2].style.display = "block";alerter.style.display ="block"}
    if (missions_count >= number4){collecters[3].style.display = "block";alerter.style.display ="block"}
}

function myFunction(x){
    ispause = x
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);}
document.addEventListener('keyup', ({keyCode})=>{
if(keyCode == 27){if (ispause == false){myFunction(true);alert("Pause")}else{myFunction(false);alert("Unpause")}}
if(keyCode == 115){seconds=99999;timer.style.display="none";collecters[2].style.display = "none";timeis = false; deleter[0].style.display = "none";deleter[1].style.display = "none"}
if(keyCode == 38 || keyCode == 32){clicking(100)}})