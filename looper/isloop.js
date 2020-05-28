'use strict';
const LinkedList = require('./linkedlist');


//Complete this algo
const isLoop = (linkedlist) => {
    let fast = linkedlist.head;
    let slow = linkedlist.head;

    while(fast){
        if(!fast.next){
            return false
        }
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
};

const findLoop = (list) => {
    let visited = new Set()
    if(isLoop(list)){
        let current = list.head
        while(!visited.has(current)){
            visited.add(current) 
            current = current.next
        }
        return current
    }
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

const test1 = new LinkedList();
test1.addToHead(0)
numbers.forEach(val => test1.addToTail(val));
test1.getNthNode(6).next = test1.getNthNode(3);

console.log('ours', findLoop(test1))
// console.log('theirs', test1.getNthNode(3))

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = {isLoop, findLoop}