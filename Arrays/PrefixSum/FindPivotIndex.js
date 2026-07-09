let arr = [1,2,3,4,5];  
let total = 0;
let leftSum = 0;
let pivot = -1;

for(let i = 0; i<arr.length;i++)
{
    total += arr[i];

}

for(let i = 0 ;i<arr.length;i++){
    let rightSum = total -leftSum-arr[i];

    if(leftSum === rightSum)
    {
        console.log(i);

    }
    else{
        leftSum += arr[i];

    }


}

console.log(pivot);




// Find Middle Index is same as to find the pivot index 
