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
        // IMPLEMENT INSERTION SORT
        return swaps;
    }

    mergeSort(array) {
        const swaps = [];
        // IMPLEMENT MERGE SORT
        return swaps;
    }

    quickSort(array) {
        const swaps = [];
        
        const partition = (arr, low, high) => { 
            let pivot = arr[high]; 
            let i = low - 1; 
          
            for (let j = low; j <= high - 1; j++) { 
                // If current element is smaller than the pivot 
                if (arr[j] < pivot) { 
                    // Increment index of smaller element 
                    i++; 
                    // Swap elements 
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    swaps.push({ firstPosition: i, lastPosition: j });
                } 
            } 
            // Swap pivot to its correct position 
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
            swaps.push({ firstPosition: i + 1, lastPosition: high });
            return i + 1; // Return the partition index 
        } 
          
        const quick = (arr, low, high) => { 
            if (low >= high) return; 
            let pi = partition(arr, low, high); 
          
            quick(arr, low, pi - 1); 
            quick(arr, pi + 1, high); 
        } 

        quick(array, 0, array.length - 1);
        return swaps;
    }

    bucketSort(array) {
        const swaps = [];
        // IMPLEMENT BUCKET SORT
        return swaps;
    }

}

export {
    SortingAlgorithms
}