class Node{
    constructor(val)
    {
        this.data = val;
        this.next = null;

    }
}

let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);

first.next= second;
second.next = third;
third.next = fourth;


let head = first;
let removeElement = 1;


let dummy = new Node(-1);
dummy.next = head;
let temp = dummy;

while(temp.next!==null)
{
    if(temp.next.data === removeElement)
    {
        temp.next=temp.next.next
    }
    else{
        temp = temp.next
    }
}

head = dummy.next;
temp=head;



while(temp!== null)
{
    console.log(temp.data);
    temp = temp.next;

}