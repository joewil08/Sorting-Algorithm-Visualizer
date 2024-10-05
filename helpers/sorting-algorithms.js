class SortingAlgorithms {

    bubbleSort(array) {
        const swaps = [];

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swaps.push({ firstPosition: j, lastPosition: j + 1 })
                }
            }
        }

        return swaps;
    }

    selectionSort(array) {
        const swaps = [];

        let min;
        for (let i = 0; i < array.length - 1; i++) {
            min = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
            swaps.push({ firstPosition: min, lastPosition: i });
        }

        return swaps;
    }

    insertionSort(array) {
        const swaps = [];

        for (let i = 1; i < array.length; i++) {
            let currentValue = array[i];
            let j;
            for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
                array[j + 1] = array[j];
                swaps.push({ firstPosition: j + 1, lastPosition: j });
            }
            array[j + 1] = currentValue;
        }

        return swaps;
    }

    mergeSort(array) {
        const swaps = [];

        const merge = (arr, start, mid, end) => {
            let start2 = mid + 1;
            if (arr[mid] <= arr[start2]) {
                return;
            }
            while (start <= mid && start2 <= end) {
                if (arr[start] <= arr[start2]) {
                    start++;
                }
                else {
                    let value = arr[start2];
                    let index = start2;
                    while (index != start) {
                        arr[index] = arr[index - 1];
                        swaps.push({ firstPosition: index, lastPosition: index - 1 })
                        index--;
                    }
                    arr[start] = value;
                    start++;
                    mid++;
                    start2++;
                }
            }
        }
        
        const sort = (arr, l, r) => {
            if (l < r) {
                let m = l + Math.floor((r - l) / 2);
                sort(arr, l, m);
                sort(arr, m + 1, r);
                merge(arr, l, m, r);
            }
        }

        sort(array, 0, array.length - 1);
        return swaps;
    }

    quickSort(array) {
        const swaps = [];

        const partition = (arr, low, high) => { 
            let pivot = arr[high]; 
            let i = low - 1; 
            for (let j = low; j <= high - 1; j++) { 
                if (arr[j] < pivot) { 
                    i++; 
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    swaps.push({ firstPosition: i, lastPosition: j });
                } 
            } 
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
            swaps.push({ firstPosition: i + 1, lastPosition: high });
            return i + 1;
        } 
          
        const sort = (arr, low, high) => { 
            if (low >= high) return; 
            let pi = partition(arr, low, high); 
            sort(arr, low, pi - 1); 
            sort(arr, pi + 1, high); 
        } 

        sort(array, 0, array.length - 1);
        return swaps;
    }

    heapSort(array) {
        const swaps = [];

        const heapify = (arr, n, i) => {
            let largest = i;
            let l = 2 * i + 1; 
            let r = 2 * i + 2; 
            if (l < n && arr[l] > arr[largest]) {
                largest = l;
            }
            if (r < n && arr[r] > arr[largest]) {
                largest = r;
            }
            if (largest !== i) {
                let temp = arr[i];
                arr[i] = arr[largest];
                arr[largest] = temp;
                swaps.push({ firstPosition: i, lastPosition: largest })
                heapify(arr, n, largest);
            }
        }

        const sort = (arr) => {
            let n = arr.length;
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
            for (let i = n - 1; i > 0; i--) {
                let temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                swaps.push({ firstPosition: 0, lastPosition: i })
                heapify(arr, i, 0);
            }
        }
        
        sort(array);
        return swaps;
    }

}

export {
    SortingAlgorithms
}