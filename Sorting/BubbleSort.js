let arr  = [7,4,9,2];
let swapped = false;

for(let i = 0 ; i < arr.length - 1 ; i++)
{
    swappped = false;
    for(let j = 0 ; j < arr.length - i - 1 ; j++)
    {
        if(arr[j]>arr[j+1])
        {
            [arr[j],arr[j+1]]  = [arr[j+1], arr[j]];
            swapped = true;

        }
    }
    console.log(arr);
    if(!swapped)break;


}



console.log(arr);
