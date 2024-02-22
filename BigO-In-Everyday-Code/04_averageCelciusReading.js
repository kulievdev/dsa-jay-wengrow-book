function averageCelsius(fahrenheitReadings) {
    const celsiusNumbers = [];

    for (let i = 0; i < fahrenheitReadings.length; i++) {
        let celsiusConversion = (fahrenheitReadings[i] - 32) / 1.8;
        celsiusNumbers.push(celsiusConversion);
    }

    let sum = 0;

    for (let i = 0; i < celsiusNumbers.length; i++) {
        sum += celsiusNumbers[i];
    }

    return sum / celsiusNumbers.length;
}

console.log(averageCelsius([78, 90, 85, 67])); // 26.666666666666664

// O(n)
