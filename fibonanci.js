let n = 8;

//using recursion

const fib = (n) => {
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }

    return fib(n-1) + fib(n-2);
}

//using dynamic programming(dp)

//printing series
const fib2 = (n) => {
    let fib = [0, 1];
    for(let i=2;i<=n;i++){
        let nextnum = fib[i-1] + fib[i-2];
        fib.push(nextnum);
    }
    return fib;
}

//printing the last number or series
const fib3 = (n) => {
    let fib = [0, 1];
    for(let i=2;i<=n;i++){
        let nextnum = fib[i-1] + fib[i-2];
        fib.push(nextnum);
    }
    return fib[n];
}

console.log(fib2(n));