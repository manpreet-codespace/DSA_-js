class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

let first = new Node(50);
let second = new Node(20);
let third = new Node(90);
let fourth = new Node(10);

first.next = second;
second.next = third;
third.next = fourth;

let head = first;
let temp = head;
let min = head.data;


while(temp !== null)
    {
        if(min > temp.data)
            {
                min = temp.data
            }
            temp = temp.next;
    }
    console.log(min);
        
let max = head.data;
temp = head;

while(temp !== null)
{
    if(max < temp.data)
    {
        max = temp.data
    }
    temp = temp.next;
}
console.log(max);