let arr = [1,2,3,4];
let prefix = [];

prefix[0] = arr[0];

for(let i =1; i<arr.length;i++)
{
    prefix[i]= prefix[i-1] + arr[i];

}
console.log(prefix);
