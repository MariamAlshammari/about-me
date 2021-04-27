'use strict';


 let score = 0;

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
         score++;
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
         score++;
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
         score++;
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
         score++;
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
          score++;
          break;
     default:
         alert('please answer yes or no y/n !')
 
  }
   let count=0;
  let myAge = Number(prompt('what is my age'));

  while (!myAge) {
      
         myAge = Number(prompt('what is my age'));
         }

    
     for (let i = 0; i < 3; i++) 
     {
        if (myAge !== 23) {
            alert('too bad my age not '+myAge);
            if(myAge>21 && myAge<25)
                {alert('your guess is too high');
            console.log('your guess is too high');}
                 else
                  {alert('Your guess is too low');
                console.log('Your guess is too low');}
       
        count=count+1;
        myAge = Number(prompt('what is my age'));}

           else
           {alert('hello my age is correct is' + myAge );
           console.log('hello my age is correct is' + myAge );
           score++;
           break; }
    
       if(count==3) 
       {console.log('thanks for trying, the correct answer is 23');
           alert('thanks for trying, the correct answer is 23');
       break;}
    }

    
    let MYfavFruit = ['apple','blueberry','Strawberries', 'orange', 'banana' , 'mango'];

    for (let i = 0; i < MYfavFruit.length; i++) {
       console.log(MYfavFruit[i]);}

      

       var counter2=0;
       if(counter2==6){ alert('Sorry you run out of guesses');}
       let favFruit
       while (counter2 < 6 && favFruit !==MYfavFruit)
       {  favFruit = prompt('what is my favourit fruit?apple,blueberry,Strawberries orange, banana or mango,!');
       console.log('Yor answer is: '+favFruit);
       alert('Yor answer is: '+favFruit);
       switch (favFruit.toUpperCase()) {
     
         case 'BLUEBERRY':
         case 'BANANA':
         case 'MANGO': 
         console.log('Great,i like it');
         alert('Great,i like it');
         score++;
         counter2=6;
         break;
        case 'STRAWBERRIES':
        case 'ORANGE': 
        case 'APPLE': 
        console.log('Ooh no , i like another type more!');
        alert('Ooh no , i like another type more!');
        counter2++;
        break;
    default:
        break;
    }}
    
    alert('my favourit fruits are: blueberry, banana, mango');
    console.log('my favourit fruits are: blueberry, banana, mango');



    console.log('yor score is:'+score);

    alert('Great work ' + userName + ' your score is ' + score);


    

       
