let num = 165;

const sumOfDigit = (num) => {
    let sum = 0;
    while(num > 0){
        let digit = num % 10;
        num = Math.floor(num / 10);
        sum += digit;
    }
    return sum;
}

console.log(sumOfDigit(num));