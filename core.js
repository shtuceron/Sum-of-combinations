/*
 * Получение комбинации чисел из произвольного массива, сумма элементов выборки которой будет равняться sumCondition (10)
 */
function SumOfCombinations() {
	var $this = this;
	
	/*
	 * Выборка уникальных комбинаций с заданным условием суммы элементов выборки.
	 * inputArr - входной массив элементов.
	 * sumCondition - условие суммы элементов массива отдельной выборки.
	 */
	this.getCombinations = function(inputArr, sumCondition) {
		var result = [],
			currArr = [];
		
		for (var i = inputArr.length - 1; i >= 0; i--) {
			for (var j = 0, maxJ = currArr.length; j < maxJ; j++)
				currArr.push(currArr[j].concat(inputArr[i]));
				
			currArr = [[inputArr[i]]].concat(currArr);
		}
		
		for (var i = currArr.length - 1, sum = 0; i >= 0; i--, sum = 0) {
			for (var j = currArr[i].length - 1; j >= 0; j--)
				sum += currArr[i][j];
			
			currArr[i] = currArr[i].sort();
			
			if (sum == sumCondition && !$this.isUnique(currArr[i], result))
				result.push(currArr[i]);
		}
		
		return result;
	};
	
	/*
	 * Исключение повторяющихся комбинаций.
	 * inputArr - массив элементов выборки.
	 * arr - массив комбинаций неповторяющихся элементов.
	 */
	this.isUnique = function(inputArr, arr) {
		for (var i = arr.length - 1, num = 0; i >= 0; i--, num = 0) {
			if (inputArr.length != arr[i].length)
				continue;

			for (var j = arr[i].length - 1; j >= 0; j--) {
				if (inputArr[j] != arr[i][j])
					break;
				else
					num++;
			}

			if (num == arr[i].length)
				return true;
		}
		
		return false;
	};
};

var sumOfCombinations = new SumOfCombinations();

sumOfCombinations.getCombinations([8, 1, 2, 3, 4, 9, 3, -2, 4, 6], 10);