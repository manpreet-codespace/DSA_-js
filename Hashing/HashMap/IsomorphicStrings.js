let s = "foo";
let t = "bar";


if(s.length !== t.length)
{
    return false;

}
else{
    let mapST= new Map();
    let mapTS = new Map();

    for(let i =0; i<s.length;i++)
    {
        let ch1= s[i];
        let ch2 = t[i];

        if(mapST.has(ch1) && mapST.get(ch1) !==ch2)
        {
            console.log(false);
            return;
        }

        if(mapTS.has(ch2) && mapTS.get(ch2) !== ch1)
        {
            console.log(false);
            return;
        }

        mapST.set(ch1,ch2);
        mapTS.set(ch2,ch1);

        
        
    }
    console.log(true);
}