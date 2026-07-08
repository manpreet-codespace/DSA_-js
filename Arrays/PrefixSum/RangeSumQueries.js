let arr = [1,2,3,4];
let prefix = [];

prefix[0] = arr[0];
for(let i =1;i<arr.length;i++){
    prefix[i] = prefix[i-1] + arr[i];

}
console.log(prefix);

// sumRange(1,3);

let left = 1;
let right= 3;
let sum =0 ;

if(left == 0)
{
    sum = prefix[right];

}
else{
    sum = prefix[right] - prefix[left-1];

}

console.log(sum);

