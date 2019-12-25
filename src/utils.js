const haversine = require('haversine');

const calculateDistance = (start, end) => Math.round(haversine(start, end));

export { calculateDistance }