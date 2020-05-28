'use strict';

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


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop