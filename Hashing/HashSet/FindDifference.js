let s = "abcd";
let t = "abcde";

let map = new Map();

for(let ch of s){
    map.set(ch,(map.get(ch)||0)+1);
}

for(let ch of t){
    if(map.has(ch) && map.get(ch)>0)
    {
        map.set(ch,map.get(ch)-1);
    }
    else{
        console.log(ch);
        break;

    }
}
