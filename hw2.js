// Java script //
var firstWord = ['depressed','annoyed','pathetic','degrated'],
 secondWord = ['Martin','Darnell','Abby','Ava'],
 thirdWord = ['garbage','crowd','lake water', 'pudding'],
 fourthWord= ['Garret', 'Stacey','Luke','Michelle'];

 var fithWord = ['wine bottle', 'flask' , 'keg'],
 	sixthWord = ['smash it', 'sell it', 'give it away', 'stare at it'];


var firstrandomWord = Math.floor(Math.random() * firstWord.length);
var secondrandomWord = Math.floor(Math.random() * secondWord.length);
var thirdrandomWord = Math.floor(Math.random() * thirdWord.length);
var fourthrandomWord = Math.floor(Math.random() * fourthWord.length);
var fithrandomWord = Math.floor(Math.random() * fithWord.length);
var sixthrandomWord = Math.floor(Math.random() * sixthWord.length);

var first = document.getElementById('first-word');
var second = document.getElementById('second-word');
var third = document.getElementById('third-word');
var fourth = document.getElementById('four-word');
var fith = document.getElementById('fith-word');
var sixth = document.getElementById('sixth-word');

console.log(firstWord[firstrandomWord]);
console.log(secondWord[secondrandomWord]);
console.log(thirdWord[thirdrandomWord]);
console.log(fourthWord[fourthrandomWord]);
console.log(fithWord[fithrandomWord]);
console.log(sixthWord[sixthrandomWord]);


first.textContext = firstWord[firstrandomWord];
second.textContext = secondWord[secondrandomWord];
third.textContext = thirdWord[thirdrandomWord];
fourth.textContext = fourthWord[fourthrandomWord];
fith.textContext = fithWord[fithrandomWord];
sixth.textContext = sixthWord[sixthrandomWord];
