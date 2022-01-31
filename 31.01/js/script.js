const daysH = document.querySelector('.timer__days');
const hoursH = document.querySelector('.timer__hours');
const minutesH = document.querySelector('.timer__minutes');
const secondsH = document.querySelector('.timer__seconds');

const text_daysH = document.querySelector('.days__text');
const text_hoursH = document.querySelector('.hours__text');
const text_minutesH = document.querySelector('.minutes__text');
const text_secondsH = document.querySelector('.seconds__text');

const text_resultH = document.querySelector('.timer__result');

let days = 0;
let hours = 0;
let minutes = 1;
let seconds =1;
let Deadline = Date.now();




if(seconds < 10){
        secondsH.textContent ='0' + seconds;
    }
else {secondsH.textContent = seconds;
     }

if(minutes < 10){
        minutesH.textContent ='0' + minutes;
    }
else {minutesH.textContent = minutes;
     }

if(hours < 10){
        hoursH.textContent ='0' + hours;
    }
else {hoursH.textContent = hours;
     }

if(days < 10){
        daysH.textContent ='0' + days;
    }
else {daysH.textContent = days;
     }

 function getNoun1(number, one, two, five) {
    let seconds1 = seconds;
    seconds1 %= 100;
    if (seconds1 >= 5 && seconds1 <= 20) {
      return five;
    }
    seconds1 %= 10;
    if (seconds1 === 2) {
      return one;
    }
    if (seconds1 >= 3 && seconds1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_secondsH.textContent =(getNoun1(4, 'секунда', 'секунды', 'секунд'));

let timeOut = 0;

let minutes1 = minutes;
    function getNoun2(number, one, two, five) {
    
    minutes1 %= 100;
    if (minutes1 >= 5 && minutes1 <= 20) {
      return five;
    }
    minutes1 %= 10;
    if (minutes1 === 2) {
      return one;
    }
    if (minutes1 >= 3 && minutes1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_minutesH.textContent =(getNoun2(4, 'минута', 'минуты', 'минут'));


let hours1 = hours;
    function getNoun3(number, one, two, five) {
    
    hours1 %= 100;
    if (hours1 >= 5 && minutes1 <= 20) {
      return five;
    }
    hours1 %= 10;
    if (hours1 === 2) {
      return one;
    }
    if (hours1 >= 3 && hours1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_hoursH.textContent =(getNoun3(4, 'час', 'часа', 'часов'));



let days1 = days;
    function getNoun4(number, one, two, five) {
    
        
    days1 %= 100;
    if (days1 >= 5 && minutes1 <= 20) {
      return five;
    }
    days1 %= 10;
    if (days1 === 2) {
      return one;
    }
    if (days1 >= 3 && days1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_daysH.textContent =(getNoun4(4, 'день', 'дня', 'дней'));

let timer = 1000;
if(timeOut == 0){
setInterval(function star(){
    
    
    if(seconds == 0 && minutes == 0 && hours == 0 && days == 0 ){
       text_resultH.textContent = "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. بسْم اللهِ اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ السُّوقِ وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا";
    }

    //console.log(Deadline/1000/60/60/24/30/12);
    
    console.log(seconds,minutes,hours,days);
if(seconds > 0){
    let seconds1 = seconds;
seconds -= 1;
    function getNoun(number, one, two, five) {
    
    seconds1 %= 100;
    if (seconds1 >= 5 && seconds1 <= 20) {
      return five;
    }
    seconds1 %= 10;
    if (seconds1 === 2) {
      return one;
    }
    if (seconds1 >= 3 && seconds1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_secondsH.textContent =(getNoun(4, 'секунда', 'секунды', 'секунд'));
}
    
    if(seconds < 10){
        secondsH.textContent ='0' + seconds;
    }
else {secondsH.textContent = seconds;
     }
    
    

if(minutes > 0 && seconds < 1){
    let minutes1 = minutes;
    function getNoun(number, one, two, five) {
    
    minutes1 %= 100;
    if (minutes1 >= 5 && minutes1 <= 20) {
      return five;
    }
    minutes1 %= 10;
    if (minutes1 === 2) {
      return one;
    }
    if (minutes1 >= 3 && minutes1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_minutesH.textContent =(getNoun(4, 'минута', 'минуты', 'минут'));
    minutes -=1;
    seconds = 60;
    if(minutes < 10){
        minutesH.textContent ='0' + minutes;
    }
else {minutesH.textContent = minutes;
     }
}

if(hours > 0 && minutes < 1 && seconds < 1){
    let hours1 = hours;
    function getNoun(number, one, two, five) {
    
    hours1 %= 100;
    if (hours1 >= 5 && minutes1 <= 20) {
      return five;
    }
    hours1 %= 10;
    if (hours1 === 2) {
      return one;
    }
    if (hours1 >= 3 && hours1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_hoursH.textContent =(getNoun(4, 'час', 'часа', 'часов'));
    
    hours -=1;
    minutes = 60;
    if(hours < 10){
        hoursH.textContent ='0' + hours;
    }
else {hoursH.textContent = hours;
     }
}

if(days > 0 && hours < 1 && seconds < 1 && days < 1){
    
    let days1 = days;
    function getNoun(number, one, two, five) {
    
        
    days1 %= 100;
    if (days1 >= 5 && minutes1 <= 20) {
      return five;
    }
    days1 %= 10;
    if (days1 === 2) {
      return one;
    }
    if (days1 >= 3 && days1 <= 4) {
      return two;
    }
    return five;
  }
    
    text_hoursH.textContent =(getNoun(4, 'день', 'дня', 'дней'));
    
    
    days -= 1;
    hours = 60;
    if(days < 10){
        daysH.textContent ='0' + days;
    }
else {daysH.textContent = days;
     }
}
    
    
    
},timer);
}





