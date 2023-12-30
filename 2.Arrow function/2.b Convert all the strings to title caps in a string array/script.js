////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////------------2.b Convert all the strings to title caps in a string array--------------------------////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const titleCaps = (str) => {
  let strg = str.toLowerCase().split(" ");
  //console.log(strg);
  for (let i = 0; i < strg.length; i++) {
    strg[i] = strg[i].charAt(0).toUpperCase() + strg[i].slice(1);
  }
  return strg.join(" ");
};

/*
1. Lowercase the string

   2. Split the string into an array of strings
 
   1st word: "i'm"    ---->  (word.charAt(0).toUpperCase() + word.slice(1));
                          i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                               "I"                     +     "'m";
      
     same process will happen for all words  
     */

console.log(titleCaps("i'm DhIvahar FRoM THeNi ss"));
