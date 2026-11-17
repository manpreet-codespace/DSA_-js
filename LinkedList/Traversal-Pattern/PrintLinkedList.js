class Node{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

let first = new Node(10);
let second = new Node(20);
let third = new Node(30);

first.next = second;
second.next = third;

let head = first;
let temp = head;

while(temp!=null)
{
    console.log(temp.data);
    temp = temp.next;

}



