let str = "The man with strong will";

//strings in js are immutable so you cannot modify the original string

const reverseWord = (str) => {
  let str2 = str.split(" ").reverse();
  let rev = "";
  for(let i of str2){
    if (i !== "") {
        rev += " " + i;
      }
  }
  return rev.substring(1);
};

console.log(reverseWord(str));
