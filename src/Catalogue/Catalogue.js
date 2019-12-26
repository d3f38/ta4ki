import React, { Component } from 'react';
import cars from '../cars'
import Card from  '../Card/Card';
import './../Card/Card.scss';
import './Catalogue.scss';
import { calculateDistance } from './../utils.js';

class Catalogue extends Component {
    state = {
        data: cars,
        sorting: 'price',
        initLocation: {'latitude': 55.7536232, 'longitude': 37.6199775}
    }

    componentDidMount() {
        this.sortDealersByPrice(this.state.data);
    }

    sortDealersByDistance = () => {
        const sortedData = this.state.data.sort((a,b) => {
            const aLocation = { 
                latitude: a.dealer.latitude,
                longitude: a.dealer.longitude
            }

            const bLocation = {
                latitude: b.dealer.latitude,
                longitude: b.dealer.longitude
            }

            const aDistance = calculateDistance(this.state.initLocation, aLocation);
            const bDistance = calculateDistance(this.state.initLocation, bLocation);

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

        return (
            <div className="Catalogue">
                <div className='Sorting'>
                    <span className='Sorting-Title'>Сортировать</span>
                    <div className='Sorting-Price'>
                        <input type='radio' className='Sorting-Input' onChange={this.sortDealersByPrice} id='sorting-price' name='sorting' checked={this.state.sorting === 'price'} hidden></input>
                        <label className='Sorting-Label'htmlFor='sorting-price'>
                            <div className='Sorting-Radio'></div>
                            <span className='Sorting-Type'>По цене</span>
                        </label>
                    </div>
                    <div className='Sorting-Distance'>
                        <input type='radio' className='Sorting-Input' onChange={this.sortDealersByDistance} id='sorting-distance' name='sorting' checked={this.state.sorting === 'distance'} hidden></input>
                        <label className='Sorting-Label' htmlFor='sorting-distance'>
                            <div className='Sorting-Radio'></div>
                            <span className='Sorting-Type'>По удаленности</span>
                        </label>
                    </div>
                </div>
                <div className='CatalogueCards'>
                    {this.state.data.map(item => Card(item))}
                </div>
            </div>
        );
    }
}

export default Catalogue;
