// Find Average of all subarrays of size K

function avgSubarrays(nums,k){

    let avg = 0;
    let arr=[];


    for(let i = 0; i <= nums.length-k; i++)
    {
        let sum =0;
        for(let j = i ; j < i+k ; j++)
        {
            sum += nums[j];

            
        }
        avg=sum/k;

        arr.push(avg);

    }

    return arr;


}


// Sliding window approach 

function avgSubarray(nums,k)
{
    let windowSum =0;
    let result =[];

    for(let i = 0; i<k ; i++)
    {
        windowSum += nums[i];

    }
    result.push(windowSum/k);


    for( let i =k ; i < nums.length ; i++)
    {
        windowSum = windowSum + nums[i] - nums[i-k];
        
        
        result.push(windowSum/k);
    } 

    return result;


}

let nums =[1,3,2,6,-1,4,1,8,2];
let k =5;

console.log(avgSubarrays(nums,k));
console.log(avgSubarray(nums,k));
