import { sleep } from "./helpers/util.js";
import { SortingAlgorithms } from "./helpers/sorting-algorithms.js";
import { complexities } from "./helpers/algorithm-stats.js";
import { ArrayGenerator } from "./helpers/array-generator.js";

function playNote(freq, isMuted) {
    if (isMuted) {
        return;
    }
    if (audioCtx == null) {
        audioCtx = new(
            AudioContext ||
            webkitAudioContext ||
            window.webkitAudioContext
        )();
    }
    const dur = 0.1;
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq;
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
    const node = audioCtx.createGain();
    node.gain.value = 0.025;
    node.gain.setTargetAtTime(0, audioCtx.currentTime, dur - 0.075);
    osc.connect(node);
    node.connect(audioCtx.destination);
}

let audioCtx = null;
let isMuted = false;
document.getElementById('sound-checkbox').addEventListener('change', function() {
    isMuted = !this.checked;  // If checkbox is unchecked, isMuted becomes true
    console.log("isMuted:", isMuted);  // For debugging purposes
});

function updateComplexityTable() {
    const algorithm = document.getElementById("selectAlgorithm").value;
    const { bestTime, averageTime, worstTime, bestSpace, averageSpace, worstSpace, stability, inPlace, parallelizable } = complexities[algorithm];

    document.getElementById("best-time").textContent = bestTime;
    document.getElementById("average-time").textContent = averageTime;
    document.getElementById("worst-time").textContent = worstTime;
    document.getElementById("best-space").textContent = bestSpace;
    document.getElementById("average-space").textContent = averageSpace;
    document.getElementById("worst-space").textContent = worstSpace;
    document.getElementById("stability").textContent = stability;
    document.getElementById("in-place").textContent = inPlace;
    document.getElementById("parallelizable").textContent = parallelizable;
}
document.getElementById("selectAlgorithm").addEventListener("change", updateComplexityTable);

let nBars = 10;

let numbersBars = document.getElementById('numbersBars');

const stage = document.getElementById('stage');
const gap = 3;
stage.style.width = "1280px";

const selectArrayType = document.getElementById("selectArrayType");
const selectAlgorithm = document.getElementById("selectAlgorithm");

const generateBtn = document.getElementById("generateBtn");
const sortBtn = document.getElementById("sortBtn");

let bars = [];
let barsDivs = [];

const sortingAlgorithms = new SortingAlgorithms({});
const arrayGenerator = new ArrayGenerator();

const arrayTypes = [
    arrayGenerator.random,
    arrayGenerator.descending,
    arrayGenerator.nearlySorted,
    arrayGenerator.fewUniques
];

const start = () => {
    stage.innerHTML = "";

    bars = arrayTypes[selectArrayType.selectedIndex](nBars);

    barsDivs = [];

    for (let i = 0; i < bars.length; i++) {
        const bar = document.createElement("div");
        bar.style.width = `${bars[i].width}px`;
        bar.style.height = `${bars[i].height}px`;
        bar.style.left = `${5 + i * (bars[i].width + gap)}px`;
        bars[i] = { ...bars[i], position: i };
        bar.classList.add("bar");
        barsDivs.push(bar);
        stage.appendChild(bar);
    }
}

start();

async function swapBars(barsDivs, i, j) {
    barsDivs[i].style.left = `${5 + j * (bars[i].width + gap)}px`;
    barsDivs[i].classList.add("activate");
    playNote(350 + parseFloat(barsDivs[i].style.height) * 6, isMuted);
    barsDivs[j].style.left = `${5 + i * (bars[i].width + gap)}px`;
    barsDivs[j].classList.add("activate");
    playNote(350 + parseFloat(barsDivs[j].style.height) * 6, isMuted);
    await sleep(300);
    barsDivs[i].classList.remove("activate");
    barsDivs[j].classList.remove("activate");
    let temp = barsDivs[i];
    barsDivs[i] = barsDivs[j];
    barsDivs[j] = temp;
}

const algorithms = [
    sortingAlgorithms.bubbleSort,
    sortingAlgorithms.selectionSort,
    sortingAlgorithms.insertionSort,
    sortingAlgorithms.mergeSort,
    sortingAlgorithms.quickSort,
    sortingAlgorithms.heapSort
];

const sort = async () => {
    const array = structuredClone(bars.map(el => el.height));

    const swaps = algorithms[selectAlgorithm.selectedIndex](array);

    for (let i = 0; i < swaps.length; i++) {
        if (swaps[i].firstPosition !== swaps[i].lastPosition) {
            await swapBars(barsDivs, swaps[i].firstPosition, swaps[i].lastPosition);
        }
    }
}

generateBtn.addEventListener("click", () => {
    nBars = parseInt(numbersBars.value, 10);
    start();
});

sortBtn.addEventListener("click", () => {
    sort();
});