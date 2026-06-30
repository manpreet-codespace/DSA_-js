let nums = [2,2,1,3,3];

// HASHMAP
let map = new Map();

for(let num of nums){
    map.set(num, (map.get(num)||0)+1);
}

for(let num of nums){

    if(map.get(num) === 1)
        {
            console.log(num);
            break;
            
        }
}

// HASHSET
let set = new Set();

for(let num of nums)
{
    if(set.has(num)){
        set.delete(num);
    }
    else{
        set.add(num);
    }
}

console.log([...set][0]);

// BIT MANIPULATION 

let ans =0;
for(let num of nums)
{
    ans ^= num;

}
console.log(ans);
