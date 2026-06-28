// BRUTE FORCE APPROACH


function maxSum(nums,k){
    let max = 0;

    for(let i =0;i<nums.length - k;i++)
    {
        let sum = 0;
        for(let j = i;j < i+k;j++)
        {
            sum += nums[j];

        }

        max = Math.max(max,sum);

    }

    return max;

}

// SLIDING WINDOW APPROACH

function maxSum(arr,k)
{
    let windowSum =0;
    for(let i =0;i<k;i++)
    {
        windowSum += arr[i];

    }
    let maxSum = windowSum;

    for(let i = k;i<arr.length ; i++)
    {
        windowSum = windowSum + arr[i] - arr[i-k];
        maxSum = Math.max(maxSum,windowSum);

    }
    return maxSum;

}




let nums = [2,1,5,1,3,2];
let arr = [2,1,5,1,3,2];

let k = 3;

console.log(maxSum(nums,k));
console.log(maxSum(arr,k));

