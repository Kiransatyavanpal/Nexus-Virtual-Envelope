setTimeout(() => {
    setTimeout(() => {
      const card = document.getElementById("flip-card-inner");
      card.style.transform = "rotateY(180deg)";
    }, 1500);
  }, 1000);
  
  setTimeout(() => {
    setTimeout(openEnvelope, 1000);
  }, 2000);
  
  function openEnvelope() {
    setInterval(() => {
      document.getElementById("one").style.transform = "rotate(180deg)";
      document.getElementById("companyName").style.display = "none";
    }, 2000);
  
    setTimeout(letterUp, 2000);
  }
  
  function letterUp() {
    const letter = document.getElementById("letter");
    const one = document.getElementById("one");
    // const envelope = document.getElementById("envelope");
  
    one.style.zIndex = 1;
    //envelop
    letter.style.zIndex = 2;
    let i = 0;
    let id = null;
    clearInterval(id);
  
    id = setInterval(() => {
      if (i == 500) {
        clearInterval(id);
      } else {
        letter.style.top = -i + "px";
        i++;
      }
    }, 5);
  
    setTimeout(letterDown, 3000);
  }
  
  function letterDown() {
    const letter = document.getElementById("letter");
    const card = document.getElementById("flip-card");
  
    letter.style.top = -500 + "px";
    letter.style.zIndex = 4;
  
    let i = 0;
    let id = null;
    clearInterval(id);
  
    id = setInterval(() => {
      if (i == 100) {
        // lastPos = -i;
        clearInterval(id);
      } else {
        letter.style.top = -400 + i * 5 + "px";
        letter.style.transform = "rotate(" + -i / 18 + "deg)";
  
        card.style.transform = "rotate(" + i / 18 + "deg)";
  
        i++;
      }
    }, 10);
  
    setTimeout(() => {
      const popUp = document.getElementById("popUp");
      popUp.style.display = "block";
      popUp.style.zIndex = 5;
    }, 2000);
  }

  const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');

// let headsCount = 0;
// let tailsCount = 0;


function deferFn(callback, ms) {
  setTimeout(callback, ms); 
}

// function processResult(result) {
//    if (result === 'heads') {
//       headsCount++;
//       heads.innerText = headsCount;
//     } else {
//       tailsCount++;
//       tails.innerText = tailsCount;
//     }
//     status.innerText = result.toUpperCase();
// }

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
 deferFn(function() {
   coin.setAttribute('class', 'animate-' + result);
   deferFn(processResult.bind(null, result), 4000);
 }, 100);
}

button.addEventListener('click', flipCoin);
