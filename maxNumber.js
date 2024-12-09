// Finding max, secondmax and thirdmax number in an array
let arr = [3, 1, 2];
let max = -Infinity;
let secMax = -Infinity;
let thirdMax = -Infinity;

const threeMax = (arr) => {
  let n = arr.length;
  if (n < 3) {
    console.log("Not Enough Elements");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      thirdMax = secMax;
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] < max) {
      thirdMax = secMax;
      secMax = arr[i];
    } else if (arr[i] > thirdMax && arr[i] < secMax) {
      thirdMax = arr[i];
    }
  }

  if(secMax === -Infinity && thirdMax === -Infinity){
    console.log(`Highest: ${max}\nNoSecondHighest\nNoThirdHighest`)
    return;
  }
  else if(thirdMax === -Infinity){
    console.log(`Highest: ${max}\n2nd Highest: ${secMax}\nNoThirdHighest`);
    return;
  }

  console.log(`Highest: ${max}`);
  console.log(`2nd Highest: ${secMax}`);
  console.log(`3rd Highest: ${thirdMax}`);
};

threeMax(arr);