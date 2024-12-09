let n = 7;

//using recursion
const fact = (n) => {
    if(n == 0 || n == 1){ //base case
        return 1;
    }

    return n * fact(n-1);
}


//using forloop
const fact2 = (n) => {
    let factorial = 1;
    for(let i=1;i<=n;i++){
        factorial *= i;;
    }
    return factorial;
}

console.log(fact2(n));