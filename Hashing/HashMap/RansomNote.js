let ransomNote = "aac";
let magazine = "aab";

let map = new Map();

for(let ch of magazine)
{
    map.set(ch,(map.get(ch) || 0) + 1);

}

for(let ch of ransomNote){
    if(!map.has(ch) || map.get(ch) === 0){

        console.log(false);
        return ;
    }
    map.set(ch,map.get(ch) - 1);
    
}
console.log(true);

