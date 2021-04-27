'use strict';

 let userName = prompt('Hello, Could you please enter your name');
console.log('Your name is : '+userName);
alert('Hello '+userName +' Welcome to my website, best wishes ^_^ ');


let area = prompt('Do i live in Amman? please answer yes or no y/n !');
console.log('Yor answer is: '+area);
alert('Yor answer is: '+area);


switch (area.toUpperCase()) {
     case 'YES':
     case 'Y':
         console.log('Ooh no ,your answer is wrong!, i live in Arramtha');
         alert('Ooh no ,your answer is wrong!, i live in Arramtha');
         break;
     case 'NO':
     case 'N':  
         console.log('Great,I live in Arramtha');
         alert('Great,I live in Arramtha');
         break;
    default:
        alert('please answer yes or no y/n !')

 }
 

let myHobby = prompt('Is it one of my hobbies to enjoy writing my own words in my spare time؟please answer yes or no y/n !');
console.log('Yor answer is: '+myHobby);
alert('Yor answer is: '+myHobby);


switch (myHobby.toUpperCase()) {
     case 'YES':
     case 'Y':
         console.log('Great,Writing is really one of my hobbies');
         alert('Great,Writing is really one of my hobbies');
         break;
     case 'NO':
     case 'N':  
         console.log('Ooh no , your answer is wrong ,Writing is really one of my hobbies!');
         alert('Ooh no ,your answer is wrong, Writing is really one of my hobbies!');
         break;
    default:
        alert('please answer yes or no y/n !')

 }

 let programming = prompt('Do I like programming? please answer yes or no y/n !');
console.log('Yor answer is: '+programming);
alert('Yor answer is: '+programming);


switch (programming.toUpperCase()) {
     case 'YES':
     case 'Y':
         console.log('Great,I like programming ');
         alert('Great,I like programming');
         break;
     case 'NO':
     case 'N':  
         console.log('Ooh no ,your answer is wrong, i love programming!');
         alert('Ooh no ,your answer is wrong, i love programming!');
         break;
    default:
        alert('please answer yes or no y/n !')

 }

 
 let education = prompt('Did I study computer information systems? please answer yes or no y/n !');
console.log('Yor answer is: '+education);
alert('Yor answer is: '+education);


switch (education.toUpperCase()) {
     case 'YES':
     case 'Y':
         console.log('Great,I studied CIS  ');
         alert('Great,I studied CIS ');
         break;
     case 'NO':
     case 'N':  
         console.log('Ooh no ,your answer is wrong!');
         alert('Ooh no ,your answer is wrong!');
         break;
    default:
        alert('please answer yes or no y/n !')

 }



  let university = prompt('Did I study BA at the Jordan University of Science and Technology? please answer yes or no y/n !');
 console.log('Yor answer is: '+university);
 alert('Yor answer is: '+university);
 
 
 switch (university.toUpperCase()) {
      case 'YES':
      case 'Y':
          console.log('Ooh no ,your answer is wrong!, i have a BA degree from yarmouk university!');
          alert('Ooh no ,your answer is wrong!, i have a BA degree from yarmouk university!');
          break;
      case 'NO':
      case 'N':  
          console.log('Great,i have a BA degree from yarmouk university');
          alert('Great,i have a BA degree from yarmouk university');
          break;
     default:
         alert('please answer yes or no y/n !')
 
  }

 

 


