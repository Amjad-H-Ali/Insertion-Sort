console.log('Insertion Sort!');

const insertionSort = (arr) => {

	for (let i = 1, len = arr.length; i < len; i ++) {
		
		let value = arr[i];
		let indxB4 = i - 1;

		while (indxB4 >= 0) {
			if (value < arr[indxB4]) {
				arr[indxB4 + 1] = arr[indxB4];
				arr[indxB4] = value;
				indxB4 --;
			}

			else { break; };
			
		};
	};
	return arr;
};

console.log(insertionSort([9, 8, 7, 6, 5, 1, 1, 0, 7, 8, 33, 97, 6, 2]));