const haversine = require('haversine');

const calculateDistance = (start, end) => Math.round(haversine(start, end));

const makeCounter = () => {
    let currentCount = 1;

    return function() { 
        return currentCount++;
    };
}

export { calculateDistance, makeCounter }