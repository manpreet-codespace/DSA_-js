let pattern = "abba";
let s = "dog cat cat dog";

let word = s.split(" ");

if(pattern.length !== word.length)
{
    return false;

}
else{
    let mapPS = new Map();
    let mapSP = new Map();

    for(let i = 0 ; i < pattern.length ; i++)
    {
        let ch1 = pattern[i];
        let  ch2= word[i];

        if(mapSP.has(ch1) && mapSP.get(ch1) !== ch2)
        {
            console.log(false);
            return;

        }
        if(mapPS.has(ch2) && mapPS.get(ch2) !== ch1)
        {
            console.log(false);
            return 

        }

        mapSP.set(ch1,ch2);
        mapPS.set(ch2,ch1);



    }
    console.log(true);

}