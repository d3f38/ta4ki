import React, { useState, useEffect } from 'react';
import cars from '../cars'

import Card from  './../Card/Card';
import './../Card/Card.scss';

const haversine = require('haversine');

function Main() {
    
    const [data, setState] = useState(cars);
    const [sorting, setSorting] = useState('price');
    const [initLocation, setInitLocation] = useState({"latitude": 55.7536232,

    "longitude": 37.6199775});

    console.log('data', data)
    useEffect(() => {
        document.title = `Вы нажали ${data} раз`;
    });

    const start = {
        latitude: 30.849635,
        longitude: -83.24559
    }
      
    const end = {
        latitude: 27.950575,
        longitude: -82.457178
    }
      
    const calculateDistance = (start, end) => Math.round(haversine(start, end));
 
    const sortPrice = (data) => {
        // console.log(data.forEach(item => {

        // }))
        return data.sort((a,b) => {
            const aLocation = { 
                latitude: a.dealer.latitude,
                longitude: a.dealer.longitude
            }

            const bLocation = {
                latitude: b.dealer.latitude,
                longitude: b.dealer.longitude
            }

            const aDistance = calculateDistance(initLocation, aLocation) || 0;
            const bDistance = calculateDistance(initLocation, bLocation) || 0;

            console.log(aDistance, bDistance)
            if (aDistance > bDistance) {
                return 1;
              }
              if (aDistance < bDistance) {
                return -1;
              }
              // a должно быть равным b
              return 0;
        });
    }

    console.log(sortPrice(data))
    return (
		<div className="Main">
            <div className='Sorting'>
                <span className='Sorting-Title'></span>
                <div className='Sorting-Price'>
                    <input type='radio' className='Sorting-Input' onChange={sortPrice} id='sorting-price' name='sorting'  hidden></input>
                    <label className='Sorting-Label'htmlFor='sorting-price'>
                        <div className='Sorting-Radio'></div>
                        <span className='Sorting-Type'>По цене</span>
                    </label>
                </div>
                <div className='Sorting-Distance'>
                    <input type='radio' className='Sorting-Input' onChange={sortPrice} id='sorting-distance' name='sorting' hidden></input>
                    <label className='Sorting-Label' htmlFor='sorting-distance'>
                        <div className='Sorting-Radio'></div>
                        <span className='Sorting-Type'>По удаленности</span>
                    </label>
                </div>
            </div>
            <div className='Catalogue'>
                {data.map(item => Card(item))}
            </div>
        </div>
	);
}

export default Main;
