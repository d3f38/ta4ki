import React from 'react';
import pin from './pin.svg';
import './App.css';
import './Card.scss';

function App() {
	return (
		<div className="App">
		
			<div className='Card'>
				<img src='https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_status/suv/2T2T/1.png' className='Card-Image' alt='Polo'></img>
				<p className='Card-Model'>Polo</p>
				<p className='Card-Price'>903880</p>
				<div className='Features'>
					<p className='Features-Title'>Особенности:</p>
					<ul className='Features-List'>
						<li>Штампованые диски</li>
						<li>Галогеновые фары</li>
						<li>Электропривод зеркал</li>
					</ul>
					<p className='Features-Other'>ещё 27 особенностей</p>
				</div>
				<div className='Dealer'>
					{/* <img src={pin} className='icon-location' alt='icon-location'></img> */}
					<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" className='icon-location'>
						<g fill-rule="evenodd">
							<path d="M249.1,82c54.4,0,113.1,33.7,114.9,124.2c0,78.4-88.8,175.8-109.7,198.5c-1.7,1.8-6.9,1.8-8.7,0
							C224.8,383.8,136,286.3,136,206.2C136,115.7,193.8,82,249.1,82z M249.9,230.8c19.9,0,36-16.1,36-35.9s-16.1-35.9-36-35.9
							s-36,16.1-36,35.9C213.9,214.7,230,230.8,249.9,230.8L249.9,230.8z"/>
						</g>
					</svg>
					<span className='Dealer-Name'>ТЦ Кунцево</span>,
					<span className='Dealer-City'>Москва</span>,
					<span className='Dealer-Distance'>10 км</span>
				</div>
			</div>
		</div>
	);
}

export default App;
