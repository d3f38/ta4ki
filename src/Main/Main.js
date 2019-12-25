import React, { useState, useEffect, Component } from 'react';
import cars from '../cars'

import Card from  './../Card/Card';
import './../Card/Card.scss';
import './Main.scss';

const haversine = require('haversine');

class Main extends Component {
    state = {
        data: cars,
        sorting: 'price',
        initLocation: {'latitude': 55.7536232, 'longitude': 37.6199775}
    }

    componentDidMount() {
        this.sortDealersByPrice(this.state.data);
    }

    

    sortDealersByDistance = ({ data, initLocation }) => {
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

        this.setState({
            data: sortedData,
            sorting: 'distance'
        })
    }

    handlerSortDealersByDistance = () => this.sortDealersByDistance(this.state);

    sortDealersByPrice = () => {
        const sortedData = this.state.data.sort((a,b) => {
            if (parseInt(a.price) > parseInt(b.price)) {
                return 1;
            }
            if (parseInt(a.price) < parseInt(b.price)) {
                return -1;
            }
            return 0;
        });

        this.setState({
            data: sortedData,
            sorting: 'price'
        })
    }

    render () {
        console.log(this.state)

        return (
            <div className="Main">
                <div className='Sorting'>
                    <span className='Sorting-Title'></span>
                    <div className='Sorting-Price'>
                        <input type='radio' className='Sorting-Input' onChange={this.sortDealersByPrice} id='sorting-price' name='sorting'  hidden></input>
                        <label className='Sorting-Label'htmlFor='sorting-price'>
                            <div className='Sorting-Radio'></div>
                            <span className='Sorting-Type'>По цене</span>
                        </label>
                    </div>
                    <div className='Sorting-Distance'>
                        <input type='radio' className='Sorting-Input' onChange={this.handlerSortDealersByDistance} id='sorting-distance' name='sorting' hidden></input>
                        <label className='Sorting-Label' htmlFor='sorting-distance'>
                            <div className='Sorting-Radio'></div>
                            <span className='Sorting-Type'>По удаленности</span>
                        </label>
                    </div>
                </div>
                <div className='Catalogue'>
                    {this.state.data.map(item => Card(item))}
                </div>
            </div>
        );
    }
}

export default Main;
