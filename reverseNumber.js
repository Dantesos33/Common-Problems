let num = 165;

const reverseNum = (num) => {
    let rev = 0;
    while(num > 0){
        let digit = num % 10;  //5  6  1
        rev = (rev * 10) + digit;  //5 56 561
        num = Math.floor(num / 10);  //16  1  0
    }
    return rev;
}

console.log(reverseNum(num));