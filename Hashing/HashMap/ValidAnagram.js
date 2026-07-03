let s = "anagram";
let t = "nagaram";

if(s.length !== t.length)
{
    console.log(false);

}
else{

    let map = new Map();
    
    for(let ch of s){
        map.set(ch, (map.get(ch)|| 0) +1);
        
    }
    
    for(let ch of t){
        if(!map.has(ch) && map.get(ch) > 0)
            {
                console.log("false");
                return;

            }
            map.set(ch,map.get(ch)-1);

        }

        for(let count of map.values())
        {
            if(count !==0){
                console.log("false");
                return;

            }
        }
        console.log("true");

}


