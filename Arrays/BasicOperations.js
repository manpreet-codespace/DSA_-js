// ⦁	Create an array of 5 numbers and print the first element. 
// ⦁	Print the last element of an array. 
// ⦁	Find the length of an array. 
// ⦁	Traverse an array and print all elements. 
// ⦁	Traverse an array and print only even numbers. 
// ⦁	Find the sum of all elements in an array. 
// ⦁	Find the largest element in an array.


let arr = [10,20,30,40,50];
let sum =0;

console.log(arr[0]);
console.log(arr[arr.length-1]);
console.log(arr.length);


for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

for(let i=0;i<arr.length;i++)
{
    if(arr[i] %2 ===0)
    {
    console.log(arr[i]);
        
    }
    
}

for(let i=0;i<arr.length;i++)
{
    sum+=arr[i];
}
    console.log(sum);


    // find largest element 

    let arr1 = [20,80,50,30,10];


    let num =arr1[0];

    for(let i=1;i<arr1.length;i++){
        if(arr1[i] >num)
        {
            num= arr1[i];

        }
    }
    console.log(num);



    // find minimum element 

    
    for(let i=1;i<arr1.length;i++){
        if(arr1[i] <num)
        {
            num= arr1[i];

        }
    }
    console.log(num);

    // Average of elements 

    let avg = sum/arr.length;
    console.log(avg);


    // count even/odd number
let arr3= [3,2,4,6,5,7,8,9];

    let count =1 ;
    let even,odd;

    for(let i= 0; i<arr3.length;i++)
    {
        if(arr3[i] % 2 ==0)
        {
            even = count ++;        
        }

    }

    console.log(even);
    console.log(arr3.length - even);


    // Reverse an array

    let start = 0;
    let end = arr.length-1;

    while(start<end)
    {
       [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;

    }

    console.log(arr);
