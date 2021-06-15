let form = document.querySelector('form');                                                 //get form
let danas = new Date();                                                                    //get today
let n = danas.toISOString().substring(0, 10);                                              //get today like ISO string

let d = document.querySelector('#check-in');                                               //get input:date 
d.setAttribute('min', n);                                                                  //set minumum date for today

let countSection = document.querySelector('#countdown');                                   //get countdown container

form.addEventListener('submit', (e) => {                                                   //on submit form
    e.preventDefault();

    countSection.classList.remove('hide');                                                 //display countdown

    let day = document.querySelector('.day');                                              //get day container
    let hours = document.querySelector('.hours');                                          //get hour container
    let minutes = document.querySelector('.minutes');                                      //get minutes container
    let sec = document.querySelector('.sec');                                              //get seconds container
    let poruka = document.querySelector('.poruka');                                        //get container for message at the end of conutdown
    let cn = document.querySelector('.cn')                                                 //get container for day, hour, minutes and seconds

    let datum = new Date(d.value);                                                         //get choosen date from input
    let datumTimestamp = datum.getTime();                                                  //get time stamp for that date

    function countdown (){
        let danas = new Date(); 
        let danasTimestamp = danas.getTime();                                              //get time stamp for today
        let ostatak = datumTimestamp - danasTimestamp;                                     //get the difference from selected date to today

        let d = Math.floor(ostatak / (1000 * 60 * 60 * 24));                               //convert difference to days, hours, minutes and seconds 
        let h = Math.floor((ostatak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((ostatak % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((ostatak % (1000 * 60)) / 1000);

        if(d < 10){d = `0${d}`};                                                           //style days, hours, minutes and second when it's lower than 10
        if(h < 10){h = `0${h}`};
        if(m < 10){m = `0${m}`};
        if(s < 10){s = `0${s}`};

        day.innerText = d;                                                                //inser to each container days, hours, minutes and seconds
        hours.innerText = h;
        minutes.innerText = m;
        sec.innerText = s;

        if (ostatak < 0) {                                                                //message at the end of countdown
            clearInterval(countdown);
            cn.style.display = 'none';
            poruka.innerHTML = "WELCOME";
        }
        
    }

    setInterval(countdown, 1000);

});