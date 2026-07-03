let nums1 = [1,2,2,1];
let nums2 = [2,2];
let result = [];
let map = new Map();

for(let num of nums1){
    map.set(num,(map.get(num) || 0)+1);
}

for(let num of nums2){
    if(map.has(num) && map.get(num)>0)
    {
        result.push(num);
        
        map.set(num,map.get(num)-1);

    }
}

console.log(result);
