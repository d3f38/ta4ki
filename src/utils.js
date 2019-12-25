const haversine = require('haversine');

const sortDealersByDistance = (data, initLocation) => {

    const calculateDistance = (start, end) => Math.round(haversine(start, end));

    const sortedData = data.sort((a,b) => {
        const aLocation = { 
            latitude: a.dealer.latitude,
            longitude: a.dealer.longitude
        }

        const bLocation = {
            latitude: b.dealer.latitude,
            longitude: b.dealer.longitude
        }

        const aDistance = calculateDistance(initLocation, aLocation);
        const bDistance = calculateDistance(initLocation, bLocation);

        if (aDistance > bDistance || isNaN(aDistance)) {
            return 1;
        }
        if (aDistance < bDistance || isNaN(bDistance)) {
            return -1;
        }
        return 0;
    });

    return sortedData;
}


export default { sortDealersByDistance }