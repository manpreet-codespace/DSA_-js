class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

let first = new Node(10);
let second = new Node(20);
let third = new Node(30);
let fourth = new Node(40);

first.next = second;
second.next = third;
third.next = fourth;

let head = first;
let temp = head;
let element = 30;



while (temp !== null) {

    console.log(temp.data);
    
    if (temp.data === element) {
        console.log(temp);

        
    }
    temp = temp.next;
    
}

