import React from 'react';
import './Card.scss';
import { calculateDistance } from './../utils';


function Card(props) {

    const dealerLocation = { 
        latitude: props.dealer.latitude,
        longitude: props.dealer.longitude
    }
    const initLocation = {'latitude': 55.7536232, 'longitude': 37.6199775};
	const  formatPrice = (price) => {
		const formatter = new Intl.NumberFormat("ru");

		return formatter.format(price);
    }
    const showFeatures = (list, showingItems) => {
        const resultItems = [];
        for (let i = 0; i < showingItems; i++) {
            const element = list[i];
            if (element) {
                resultItems.push(<li className='Features-Item'>{element}</li>)
            } else resultItems.push(<br></br>)
        }

        return resultItems;
    }

    const distanceToDealer = calculateDistance(dealerLocation, initLocation);
    const distanceToDealerText = distanceToDealer ? `, ${distanceToDealer} км`: '';
    const amountItems = 3;
    const amountFeaturesShow = showFeatures(props.features, amountItems).length;
    const amountAllFeatures = props.features.length;
    const totalFeatures= amountAllFeatures - amountFeaturesShow;
    const textContentFeature = totalFeatures > 0 ? 
        `ещё ${totalFeatures} особенностей` : <br></br>;

    
	return (
        <div className='Card' key={props.id}>
            <div className='Card-AutoInfo'>
                <img src={props.images[0]} className='Card-Image' alt='Polo'></img>
                <a href='#w' className='Card-Model'>{props.model_name}</a>
                <p className='Card-Price'>{formatPrice(props.price)} ₽</p>
                <div className='Features'>
                    <p className='Features-Title'>Особенности:</p>
                    <ul className='Features-List'>
                        {showFeatures(props.features, 3)}
                    </ul>
                    <a href='#features' className='Features-Other'>{textContentFeature}</a>
                </div>
            </div>
            
            <div className='Dealer'>
                <a href='#asd' className='Dealer-Link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" className='icon-location Dealer-IconLocation'>
                        <g fillRule="evenodd">
                            <path d="M249.1,82c54.4,0,113.1,33.7,114.9,124.2c0,78.4-88.8,175.8-109.7,198.5c-1.7,1.8-6.9,1.8-8.7,0
                            C224.8,383.8,136,286.3,136,206.2C136,115.7,193.8,82,249.1,82z M249.9,230.8c19.9,0,36-16.1,36-35.9s-16.1-35.9-36-35.9
                            s-36,16.1-36,35.9C213.9,214.7,230,230.8,249.9,230.8L249.9,230.8z"/>
                        </g>
                    </svg>
                    {props.dealer.name}, {props.dealer.city}{distanceToDealerText}
                </a>
                
            </div>
        </div>
	);
}

export default Card;
