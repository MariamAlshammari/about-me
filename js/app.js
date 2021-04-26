'use strict';

 let userName = prompt('Hello, Could you please enter your name');
console.log('Your name is : '+userName);
alert('Hello '+userName +' Welcome to my website, best wishes ^_^ ');

let mood = prompt('are you ok? please answer yes or no y/n !');
console.log('Yor mood is: '+mood);
alert('Yor mood is: '+mood);


switch (mood.toUpperCase()) {
     case 'YES':
     case 'Y':
         console.log('Great,you are ok, have a nice day');
         alert('Great,you are ok, have a nice day');
         break;
     case 'NO':
     case 'N':  
         console.log('Ooh no ,i hope improve yor mood quikly, good luck!');
         alert('Ooh no ,i hope improve yor mood quikly, good luck!');
         break;
    default:
        alert('please answer yes or no y/n for your mood!')

 }

 let programming = prompt('Do you like programming? please answer yes or no y/n !');
console.log('Yor answer is: '+programming);
alert('Yor answer is: '+programming);


switch (programming.toUpperCase()) {
     case 'YES':
     case 'Y':
         console.log('Great,you are like programming, Register for this course at LTUC now');
         alert('Great,you are like programming, Register for this course at LTUC now');
         break;
     case 'NO':
     case 'N':  
         console.log('Ooh no ,i hope improve yorself in another fields ,good luck!');
         alert('Ooh no ,i hope improve yorself in another fields ,good luck!');
         break;
    default:
        alert('please answer yes or no y/n for your mood!')

 }

 
let browsing = prompt('are you enjoy to browsing my page? please answer yes or no y/n !');
console.log('Yor answer is: '+browsing);
alert('Yor answer is: '+browsing);

switch (browsing.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great,you are enjoy to bowsing my webpage');
        alert('Great,you are enjoy to bowsing my webpage');
        break;
    case 'NO':
    case 'N':  
        console.log('Ooh no ,i hope enjoy browsing in another webpage');
        alert('Ooh no ,i hope enjoy browsing in another webpage');
        break;
   default:
       alert('please answer yes or no y/n for your browsing!')

}

let favfruit = prompt('My favorite fruit is banana and do you like it like me? please answer yes or no y/n !');
console.log('Yor answer is: '+favfruit);
alert('Yor answer is: '+favfruit);

switch (favfruit.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great,you are like me, please purchase alot of banana hehe!');
        alert('Great,you are like me, please purchase alot of banana hehe!');
        break;
    case 'NO':
    case 'N':  
        console.log('you said no ,i hope enjoy eating another type of fruit');
        alert('Ooh you said no ,i hope enjoy eating another type of fruit');
        break;
   default:
       alert('please answer yes or no y/n for your browsing!')

}

let favcolor = prompt('My favorite color is green and do you like it like me? please answer yes or no y/n !');
console.log('Yor answer is: '+favcolor);
alert('Yor answer is: '+favcolor);

switch (favcolor.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great,you are like me, like a green color');
        alert('Great,you are like me,like a green color');
        break;
    case 'NO':
    case 'N':  
        console.log('you said no ,i hope enjoy liking another color');
        alert('Ooh you said no ,i hope enjoy liking another color');
        break;
   default:
       alert('please answer yes or no y/n for your browsing!')

}

