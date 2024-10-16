class ArrayGenerator {

    random = (nBars) => {
        const gap = 3;
        let bars = Array(nBars).fill(0).map(_ => {    
            return {
                width: (parseInt(stage.style.width) - (nBars - 1) * gap - 10) / nBars,
                height: Math.floor(Math.random() * 200) + 1
            };
        });
        return bars;
    }

    descending = (nBars) => {
        let bars = this.random(nBars);
        return bars.sort((a, b) => b.height - a.height);
    }

    nearlySorted = (nBars) => {
        let bars = this.random(nBars);
        const percentageFactor = 20
        const numSwaps = Math.floor(nBars / percentageFactor) + 1;
        bars.sort((a, b) => a.height - b.height);

        // Introduce a small number of swaps to make the array nearly sorted
        for (let i = 0; i < numSwaps; i++) {
            const idx1 = Math.floor(Math.random() * (nBars));
            const idx2 = Math.floor(Math.random() * (nBars));
        
            // Swap two random elements in the array
            [bars[idx1], bars[idx2]] = [bars[idx2], bars[idx1]];
        }

        return bars;
    }

    fewUniques = (nBars) => {
        let bars = this.random(nBars);
        const uniqueValues = [10, 60, 110, 160, 200];
        const findNearestValue = (val) => {
            return uniqueValues.reduce((prev, curr) => 
                Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
            );
        }
        bars.forEach(item => {
            item.height = findNearestValue(item.height);
        });
        return bars;
    }
}

export {
    ArrayGenerator
}