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

// SLIDING WINDOW APPROACH

function maxVowel(s,k){
    let count =0;

    for(let i=0;i<k;i++)
    {
        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u")
        {
            count++;

        }
    }
    let max = count;

    for(let i =k;i<s.length;i++)
    {
        if(s[i-k] === "a" || s[i-k] === "e" || s[i-k] === "i" || s[i-k] === "o" || s[i-k] === "u"){
            count--;

        }

        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
            count++;

        }
        max = Math.max(max,count);
    }

    return max;
    
}


let s="abciiidef";
let k = 3;
console.log(maxVowels(s,k));
console.log(maxVowel(s,k));
