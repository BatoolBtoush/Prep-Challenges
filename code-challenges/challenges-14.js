'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let lastIn = str.lastIndexOf(" ");
    return str.slice(lastIn + 1, str.length)
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let array = str.split(' ');
    return array[array.length - 1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    const arr = str.split(" ");
    arr.includes("I") ? arr.splice(arr.indexOf("I"),1, "We") : null;
    arr.includes("am") ? arr.splice(arr.indexOf("am"),1, "are") : null;
    arr.includes("was") ? arr.splice(arr.indexOf("was"),1, "were") : null;

    return arr.join(" ");
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
  return arr
    .map((word, index) => {
      if ((index + 1) % 5 === 0) return `${word},`;
      else return word;
    })
    .join(" ");
};

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };