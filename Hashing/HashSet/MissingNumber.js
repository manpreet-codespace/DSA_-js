let nums = [3,0,1];

// HASH SET
let set = new Set(nums);

for(let i=0;i<nums.length;i++)
{
    if(!set.has(i)){
        console.log(i);
        break;
    }
}

// MATH FORMULA

let n = nums.length;

let expectedSum = (n*(n+1))/2;

let actualSum =0;

for(let num of nums){
    actualSum += num;

}
console.log(expectedSum - actualSum);


// XOR
let xor = nums.length;
for(let i =0;i<nums.length ;i++)
{
    xor^=i;
    xor^=nums[i];

}
console.log(xor);
