let nums1 = [1,2,2,1];
let nums2 = [2,2];
let result =[];

let set = new Set(nums1);
for(let num of nums2)
{

    if(set.has(num))
        {
            result.push(num);
            set.delete(num);
            
        }
    }
    
console.log(result);

