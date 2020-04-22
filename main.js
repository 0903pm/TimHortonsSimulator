'use strict';

//British Columbia
// Global Variables
let numagain = 0;
let numcoffee = 0;
let numdonut = 0;
let numprize = 0;

// Event Listeners
document.getElementById('onceb').addEventListener('click',onceb);
document.getElementById('fiveb').addEventListener('click',fiveb);
document.getElementById('wonb').addEventListener('click',wonb);
document.getElementById('fivehb').addEventListener('click',fivehb);

// Event Function
function onceb() {
  // Simulate once
    let randnum = Math.random();
    let totalbb = 1 + numagain+numcoffee+numdonut+numprize;

    if(randnum < 0.7) {
      numagain++;
        document.getElementById('againb').innerHTML = numagain;
        document.getElementById('totalb').innerHTML = totalbb;
    } else if(randnum < 0.8) {
      numcoffee++;
      document.getElementById('coffeeb').innerHTML = numcoffee;
      document.getElementById('totalb').innerHTML = totalbb;
    } else if(randnum < 0.9) {
      numdonut++;
      document.getElementById('donutb').innerHTML = numdonut;
      document.getElementById('totalb').innerHTML = totalbb;
    } else {
      numprize++;
      document.getElementById('prizeb').innerHTML = numprize;
      document.getElementById('totalb').innerHTML = totalbb;
    }
}

// Simulate five times
function fiveb() {
  for (let n=0; n<5; n++) {
    onceb();
  }
}

// Simulate until prize is won
function wonb() {
  while (numprize <1) {
    onceb();
  }
}

// Simulate until 500 donuts
function fivehb() {
  while (numdonut < 500) {
    onceb();
  }
}

// Alberta
// Global Variables
let numagaina = 0;
let numcoffeea = 0;
let numdonuta = 0;
let numprizea = 0;

// Event Listeners
document.getElementById('oncea').addEventListener('click',oncea);
document.getElementById('fivea').addEventListener('click',fivea);
document.getElementById('wona').addEventListener('click',wona);
document.getElementById('fiveha').addEventListener('click',fiveha);

// Event Function
function oncea() {
  // Simulate once
  let randnum = Math.random();
  let totalaa = 1+numagaina+numcoffeea+numdonuta+numprizea;

  if(randnum < 0.15) {
    numagaina++;
      document.getElementById('againa').innerHTML = numagaina;
      document.getElementById('totala').innerHTML = totalaa;
  } else if(randnum < 0.55) {
    numcoffeea++;
    document.getElementById('coffeea').innerHTML = numcoffeea;
    document.getElementById('totala').innerHTML = totalaa;
  } else if(randnum < 0.95) {
    numdonuta++;
    document.getElementById('donuta').innerHTML = numdonuta;
    document.getElementById('totala').innerHTML = totalaa;
  } else {
    numprizea++;
    document.getElementById('prizea').innerHTML = numprizea;
    document.getElementById('totala').innerHTML = totalaa;
  }
}

// Simulate five times
function fivea() {
  for (let n=0; n<5; n++) {
    oncea();
  }
}

// Simulate until prize is won
function wona() {
  while (numprizea <1) {
    oncea();
  }
}

// Simulate until 500 donuts
function fiveha() {
  while (numdonuta < 500) {
    oncea();
  }
}

// Saskatchewan
// Global Variables
let numagainsk = 0;
let numcoffeesk = 0;
let numdonutsk = 0;
let numprizesk = 0;

// Event Listeners
document.getElementById('oncesk').addEventListener('click',oncesk);
document.getElementById('fivesk').addEventListener('click',fivesk);
document.getElementById('wonsk').addEventListener('click',wonsk);
document.getElementById('fivehsk').addEventListener('click',fivehsk);

// Event Function
function oncesk() {
  // Simulate once
  let randnum = Math.random();
  let totalss = 1+numagainsk+numcoffeesk+numdonutsk+numprizesk;

  if(randnum < 0.15) {
    numagainsk++;
      document.getElementById('againsk').innerHTML = numagainsk;
      document.getElementById('totalsk').innerHTML = totalss;
  } else if(randnum < 0.55) {
    numcoffeesk++;
    document.getElementById('coffeesk').innerHTML = numcoffeesk;
    document.getElementById('totalsk').innerHTML = totalss;
  } else if(randnum < 0.95) {
    numdonutsk++;
    document.getElementById('donutsk').innerHTML = numdonutsk;
    document.getElementById('totalsk').innerHTML = totalss;
  } else {
    numprizesk++;
    document.getElementById('prizesk').innerHTML = numprizesk;
    document.getElementById('totalsk').innerHTML = totalss;
  }
}

// Simulate five times
function fivesk() {
  for (let n=0; n<5; n++) {
    oncesk();
  }
}

// Simulate until prize is won
function wonsk() {
  while (numprizesk <1) {
    oncesk();
  }
}

// Simulate until 500 donuts
function fivehsk() {
  while (numdonutsk < 500) {
    oncesk();
  }
}