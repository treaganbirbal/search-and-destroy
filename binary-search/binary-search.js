'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let front = 0
	let back = array.length - 1
	while(front <= back){
	  let mid = Math.floor(front+back / 2)
		if(target === array[mid]){
			return true;
		} else if(target < array[mid]){
			back = mid - 1
		} else if(target > array[mid]){
			front = mid + 1
		}
	}
	return false
};

let data = [1, 3, 5, 7, 9, 11]
console.log(binarySearch(data))
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch