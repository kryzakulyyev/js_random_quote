// create variables containing strings
//Use an array to hold the value of the quotes

// 1
let quote='Beware of what you become in pursuit of what you want. - Jim Rohn';
let quote2='It\'s not what happens to you, but how you react to it that matters. - Epictetus';
let quote3='The best revenge is massive success. - Frank Sinatra';
let quote4='You miss 100% of the shots you don\'t take. - Wayne Gretzy';
let quote5='Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela';
let quote6='Do not take life too seriously. You will not get out alive. - Elbert Hubbard';

//2
let quoteArr=[quote, quote2, quote3, quote4, quote5, quote6 ]
quoteArr.sort()

//3
let days= ['Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday']
  arrRandom=arr=>{ 
let random=Math.floor(Math.random()* arr.length);
return arr[random];
}
//4
console.log(`Today is ${arrRandom(days)} and today's quote is ${arrRandom(quoteArr)}`);
