'use strict';


let score = 0;

let userName = prompt('Hello, Could you please enter your name');
alert('Hello ' + userName + ' Welcome to my website, best wishes ^_^ ');



let question1 = function (area) {



    switch (area.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Ooh no ,your answer is wrong!, i live in Arramtha');
            break;
        case 'NO':
        case 'N':
            alert('Great,I live in Arramtha');
            score++;
            break;
        default:
            alert('please answer yes or no y/n !')

    }

}
let area = prompt('Do i live in Amman? please answer yes or no y/n !');
alert('Yor answer is: ' + area);

question1(area);
let question2 = function (myHobby) {


    switch (myHobby.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Great,Writing is really one of my hobbies');
            score++;
            break;
        case 'NO':
        case 'N':
            alert('Ooh no ,your answer is wrong, Writing is really one of my hobbies!');
            break;
        default:
            alert('please answer yes or no y/n !')

    }
}
let myHobby = prompt('Is it one of my hobbies to enjoy writing my own words in my spare time؟please answer yes or no y/n !');
alert('Yor answer is: ' + myHobby);

question2(myHobby);

let question3 = function (programming) {
    switch (programming.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Great,I like programming');
            score++;
            break;
        case 'NO':
        case 'N':
            alert('Ooh no ,your answer is wrong, i love programming!');
            break;
        default:
            alert('please answer yes or no y/n !')

    }
}
let programming = prompt('Do I like programming? please answer yes or no y/n !');
alert('Yor answer is: ' + programming);

question3(programming);


let question4 = function (education) {
    switch (education.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Great,I studied CIS ');
            score++;
            break;
        case 'NO':
        case 'N':
            alert('Ooh no ,your answer is wrong!');
            break;
        default:
            alert('please answer yes or no y/n !')

    }
}
let education = prompt('Did I study computer information systems? please answer yes or no y/n !');
alert('Yor answer is: ' + education);

question4(education);


let question5 = function (university) {
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
}
let university = prompt('Did I study BA at the Jordan University of Science and Technology? please answer yes or no y/n !');
alert('Yor answer is: ' + university);

question5(university);
let count = 0;
let question6 = function (myAge) {

   

    for (let i = 0; i < 3; i++) {
        if (myAge !== 23) {
            alert('too bad my age not ' + myAge);
            if (myAge > 23 ) {
                alert('your guess is too high');
            }
            else {
                alert('Your guess is too low');
            }

            count = count + 1;
            myAge = Number(prompt('what is my age'));
        }

        else {
            alert('hello my age is correct is' + myAge);
            score++;
            break;
        }

        if (count == 3) {
            alert('thanks for trying, the correct answer is 23');
            break;
        }
    }
}
let myAge = Number(prompt('what is my age'));
question6(myAge);

let question7 = function (userFavFruit) {
    for (var i = 0; i < 6; i++) {
        let userAnsw = prompt('Can you guess my favorite fruit?');
        let guess = userAnsw.toLowerCase();

        for (var j = 0; j < userFavFruit.length; j++) {
            if (guess === userFavFruit[j]) {
                alert('Congrats i like it, Yor answer is correct is: ' + userAnsw);
                score++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Sorry wrong answer' + userAnsw + ', try again');
        }
    }
}
let userFavFruit = ['blueberry', 'strawberry', 'banana', 'mango', 'watermelon'];
question7(userFavFruit);

alert('my favourit fruits are: blueberry, banana, mango,strawberry,watermelon');




alert('Great work ' + userName + ' your score is ' + score + ' of 7');





