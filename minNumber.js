// Finding min, secondmin and thirdmin number in an array
let arr = [3, 1, 2];
let min = Infinity;
let secMin = Infinity;
let thirdMin = Infinity;

const threeMin = (arr) => {
    let n = arr.length;
    if (n < 3) {
      console.log("Not Enough Elements");
      return;
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        thirdMin = secMin;
        secMin = min;
        min = arr[i];
      } else if (arr[i] < secMin && arr[i] > min) {
        thirdMin = secMin;
        secMin = arr[i];
      } else if (arr[i] < thirdMin && arr[i] > secMin) {
        thirdMin = arr[i];
      }
    }
  
    if(secMin === Infinity && thirdMin === Infinity){
      console.log(`Smallest: ${min}\nNoSecondSmallest\nNoThirdSmallest`)
      return;
    }
    else if(thirdMin === Infinity){
      console.log(`Smallest: ${min}\n2nd Smallest: ${secMin}\nNoThirdSmallest`);
      return;
    }
  
    console.log(`Smallest: ${min}`);
    console.log(`2nd Smallest: ${secMin}`);
    console.log(`3rd Smallest: ${thirdMin}`);
  };

threeMin(arr);