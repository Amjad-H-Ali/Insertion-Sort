console.log('Insertion Sort!');

const insertionSort = (arr) => {

	for (let i = 1, len = arr.length; i < len; i ++) {
		console.log(arr[i]);
	}
};

insertionSort([0, 0, 2, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7, 7, 9, 9, 34, 43, 45, 99]);