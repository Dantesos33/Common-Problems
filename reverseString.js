let str = "hello";

//strings in js are immutable so you cannot modify the original string

const reverseString = (str) => {
    let str2 = str.split('');  //converting the string to array
    let start = 0;
    let end = str.length - 1;
    while(start < end){
        [str2[start], str2[end]] = [str2[end], str2[start]];
        start++;
        end--;
    }
    return str2.join('');  //converting the array into string
}

console.log(reverseString(str));