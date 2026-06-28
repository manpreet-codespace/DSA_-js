// Find maximum number of vowels in substring with length of K.

function maxVowels(nums,k)
{
    let max=0;

    for(let i =0 ; i<nums.length;i++)
    {
        let count = 0;
        for(let j=i;j<i+k;j++)
        {
            if(nums[j] == 'a' ||nums[j] == 'e' || nums[j] == "i" || nums[j] =='o' || nums[j] =='u')
            {
                count++;
            }
        }
        max=Math.max(max,count);

        
    }
    return max;

}

let s="abciiidef";
let k = 3;
console.log(maxVowels(s,k));
