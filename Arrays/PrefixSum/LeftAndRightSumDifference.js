let arr = [10, 4, 8, 3];
let total = 0;
let leftSum = 0;
let result = [];


for(let i=0;i<arr.length;i++)
{
    total +=arr[i];

}
for (let i = 0; i < arr.length; i++) {
    let rightSum = total - leftSum - arr[i];

    result.push(Math.abs(rightSum - leftSum));

    leftSum += arr[i];


}

console.log(result);
