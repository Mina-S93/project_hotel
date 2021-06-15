let brojevi = document.querySelectorAll('#loto-ticket span');                   //get every in array loto-ticket number
let start = document.querySelector('#startButton');                             //get start button
let hide = document.querySelector('#hide');                                     //get container to hide hole game
let mojiBrojevi = document.querySelector('#chosenNum');                         //get container to store choosen numbers

let niz = [];
let niz1 = [];                                                                  //empty arrays to store choosen numbers
brojevi.forEach(broj => {
    broj.addEventListener('click', function lister() {                          //for every click on each number

        if(niz1.length < 7){                                                    //while array is less than 7
            broj.classList.add('izabrano');                                     //add class to number
            niz.push(broj.innerText);                                           //add number to array
            niz1 = niz.filter(function(item, pos) {                             //if you click twice on same number, one is deleted
                return niz.indexOf(item) == pos;
            }) 
        } 

        if (niz1.length == 7){                                                   //when array has 7 numbers
            start.style.display = 'block';                                       //start button apears
            hide.style.display = 'block';                                        //hide container apears over game so you can't choose more numbers
            niz1.sort(function(a, b) {                                           //sort choosen numbers in ascending order
                return a - b;
              });
            let j = niz1.join(' | ');                                            //join array in string
            mojiBrojevi.innerHTML += `<h2 class="heading">Choosen Numbers</h2>    
                                      <span class="margin">${j}</span>`;              //add sting with choosen numbers to container
        }                                                              
    })
});


let random = document.querySelector('#random');                                //get container for random numbers
let guessedNum = document.querySelector('#guessedNum');                        //p for guessed numbers
let guessedNumContainer = document.querySelector('#guessedNum-container');     //container for guessed numbers

let one = document.querySelector('#firstNumber');                              //get container for every random number
let two = document.querySelector('#secondNumber');
let three = document.querySelector('#thirdNumber');
let four = document.querySelector('#fourthNumber');
let five = document.querySelector('#fifthNumber');
let six = document.querySelector('#sixthNumber');
let seven = document.querySelector('#seventhNumber');

start.addEventListener('click', () => {                                        //on start game
    start.setAttribute('disabled', true);                                      //start game button is disabled
    let klasa = document.querySelectorAll('.izabrano');                        //get all picked numbers
    let igrac = [];                                                            //store it in array
    klasa.forEach(el => {
            igrac.push(Number(el.innerText));
    })


let nizRandom = [];                                                            //empty arrays for random numbers
let nizRandom1 = [];
while(nizRandom1.length != 7){                                                 //while array length is'n 7
    if(nizRandom1.length < 7){
        let compRand = Math.ceil(Math.random()*39);                            //generate 7 random numbers from 1 to 39
        nizRandom.push(compRand);                                              //store them in array
        nizRandom1 = nizRandom.filter(function(item, pos) {                    //check for duplicates
            return nizRandom.indexOf(item) == pos;
        }) 
    }
}

    one.classList.add('animation');                                            //add animation before showing a number
    random.style.visibility = 'visible';                                       //show container for random numbers

    setTimeout(() => {                                                         //animation is every 2s
        one.innerText = nizRandom1[0];                                         //add first element from array od random numbers
        two.classList.add('animation');                                        //add animation to next container for random number
    }, 2000); 

    setTimeout(() => {
        two.innerText = nizRandom1[1];                                         //add second element from array od random numbers
        three.classList.add('animation');                                      //add animation to next container for random number
    }, 4000); 

    setTimeout(() => {
        three.innerText = nizRandom1[2];                                       //add third element from array od random numbers
        four.classList.add('animation');                                       //add animation to next container for random number
    }, 6000); 

    setTimeout(() => {
        four.innerText = nizRandom1[3];                                        //add fourth element from array od random numbers
        five.classList.add('animation');                                       //add animation to next container for random number
    }, 8000); 

    setTimeout(() => {
        five.innerText = nizRandom1[4];                                        //add fifth element from array od random numbers
        six.classList.add('animation');                                        //add animation to next container for random number
    }, 10000); 

    setTimeout(() => {
        six.innerText = nizRandom1[5];                                         //add sixth element from array od random numbers
        seven.classList.add('animation');                                      //add animation to next container for random number
    }, 12000); 

    setTimeout(() => {
        seven.innerText = nizRandom1[6];                                      //add seventh element from array od random numbers
    }, 14000); 

    setTimeout(() => {                                                        //1s after displaying 7 random numbers show gussed numbers

        guessedNumContainer.style.display = 'block';                         //container for guessed numbers apears      
        let found = [];                                                      //empty array for guessed numbers
        for (let i = 0; i < nizRandom1.length; i++) {                        //check if there is guessed numbers
        if (igrac.indexOf(nizRandom1[i]) > -1) {                             //igrac has numbers player picked and nizRandom1 has 7 random numbers 
            found.push(nizRandom1[i]);
            } 
        }

        found.sort(function(a, b) {                                          //sort guessed numbers in ascending order
            return a - b;
        });
        let found1 = found.join(' | ');                                      

        //Messages when player guessed 0 numbers, all numbers, od displaying guessed numbers
        if(found.length == 0){
            guessedNum.innerHTML = `<span class="margin guessed">Sorry, you didn\'t guessed any number</span>`
        } else if (found.length == 7){
            guessedNum.innerHTML = `<span class="margin guessed">Bravo, you guessed every number</span>`
        } else {
        guessedNum.innerHTML += `<span class="margin guessed">${found1}</span>`;
        }
    }, 15000); 

})




