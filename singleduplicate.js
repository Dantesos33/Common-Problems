//single duplicate element using fast and slow pointer
let arr = [1, 2, 3, 4, 4, 3];
let slow = arr[0];
let fast = arr[0];

function fastslow(){
    while(true){
        slow = arr[slow];
        fast = arr[arr[fast]];
        
        
        if(slow == fast){
            break;
        }
    }

slow = arr[0];

while(slow!=fast){
    slow = arr[slow];
    fast = arr[fast];
}
return slow;
}
console.log(fastslow())