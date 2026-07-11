let nums = [-2, -1, 2, 1,1];
let k =1;
let max = false;

let prefixSum =0;
 for(let i =0;i<nums.length;i++)
 {
    prefixSum+=nums[i];

    if(prefixSum === k)
    {
        console.log(i+1);
    }
 }

