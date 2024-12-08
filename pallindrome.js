let str = "racecar";

const reverseString = (str) => {
    let str2 = str.split('');
    let start = 0;
    let end = str.length - 1;
    while(start < end){
        [str2[start], str2[end]] = [str2[end], str2[start]];
        start++;
        end--;
    }
    return str2.join('');
}

const isAlphaNumeric = (str) => {
    let str2 = "";
    for(let i of str){
        if(i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z' || i >= '0' && i <= '9'){
            str2 += i;
        }
    }
    return str2;
}

const isPallindrome = (str) => {
    str = isAlphaNumeric(str);
    let rev = reverseString(str);
    if(str === rev){
        return true;
    }
    return false;
}

console.log(isPallindrome(str));