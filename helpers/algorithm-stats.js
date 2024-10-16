export const complexities = {
    bubbleSort: {
        bestTime: "O(n)",
        averageTime: "O(n^2)",
        worstTime: "O(n^2)",
        bestSpace: "O(1)",
        averageSpace: "O(1)",
        worstSpace: "O(1)",
        stability: "Stable",
        inPlace: "Yes",
        parallelizable: "No"
    },
    selectionSort: {
        bestTime: "O(n^2)",
        averageTime: "O(n^2)",
        worstTime: "O(n^2)",
        bestSpace: "O(1)",
        averageSpace: "O(1)",
        worstSpace: "O(1)",
        stability: "Unstable",
        inPlace: "Yes",
        parallelizable: "No"
    },
    insertionSort: {
        bestTime: "O(n)",
        averageTime: "O(n^2)",
        worstTime: "O(n^2)",
        bestSpace: "O(1)",
        averageSpace: "O(1)",
        worstSpace: "O(1)",
        stability: "Stable",
        inPlace: "Yes",
        parallelizable: "No"
    },
    mergeSort: {
        bestTime: "O(n log n)",
        averageTime: "O(n log n)",
        worstTime: "O(n log n)",
        bestSpace: "O(n)",
        averageSpace: "O(n)",
        worstSpace: "O(n)",
        stability: "Stable",
        inPlace: "No",
        parallelizable: "Yes"
    },
    quickSort: {
        bestTime: "O(n log n)",
        averageTime: "O(n log n)",
        worstTime: "O(n^2)",
        bestSpace: "O(log n)",
        averageSpace: "O(log n)",
        worstSpace: "O(n)",
        stability: "Unstable",
        inPlace: "Yes",
        parallelizable: "Yes"
    },
    heapSort: {
        bestTime: "O(n log n)",
        averageTime: "O(n log n)",
        worstTime: "O(n log n)",
        bestSpace: "O(1)",
        averageSpace: "O(1)",
        worstSpace: "O(1)",
        stability: "Unstable",
        inPlace: "Yes",
        parallelizable: "No"
    }
};