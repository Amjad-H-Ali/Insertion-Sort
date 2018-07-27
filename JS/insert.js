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
};

insertionSort([9, 8, 7, 6, 5]);