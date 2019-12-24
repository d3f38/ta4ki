import React, { useState, useEffect } from 'react';
import cars from '../cars'

import Card from  './../Card/Card';
import './../Card/Card.scss';

function Main() {
    
    const [data, setState] = useState(cars);
    const [sorting, setSorting] = useState('price');

    console.log('data', data)
    useEffect(() => {
        document.title = `Вы нажали ${data} раз`;
    });

	const  formatPrice = (price) => {
		const formatter = new Intl.NumberFormat("ru");

		return formatter.format(price);
    }
    
    
    const sort = () => {
        console.log('CHANGE')
    }
    return (
		<div className="Main">
            <div className='Sorting'>
                <span className='Sorting-Title'></span>
                <div className='Sorting-Price'>
                    <input type='radio' className='Sorting-Input' onChange={sort} id='sorting-price' name='sorting'  hidden></input>
                    <label className='Sorting-Label'htmlFor='sorting-price'>
                        <div className='Sorting-Radio'></div>
                        <span className='Sorting-Type'>По цене</span>
                    </label>
                </div>
                <div className='Sorting-Distance'>
                    <input type='radio' className='Sorting-Input' onChange={sort} id='sorting-distance' name='sorting' hidden></input>
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

	// return (
	// 	<div className="Main">
    //         <div className='Sorting'>
    //             <span className='Sorting-Title'></span>
    //             <div className='Sorting-Price'>
    //                 <input type='radio' className='Sorting-Input' onChange={sort} id='sorting-price' name='sorting'  hidden></input>
    //                 <label className='Sorting-Label'htmlFor='sorting-price'>
    //                     <div className='Sorting-Radio'></div>
    //                     <span className='Sorting-Type'>По цене</span>
    //                 </label>
    //             </div>
    //             <div className='Sorting-Distance'>
    //                 <input type='radio' className='Sorting-Input' onChange={sort} id='sorting-distance' name='sorting' hidden></input>
    //                 <label className='Sorting-Label' htmlFor='sorting-distance'>
    //                     <div className='Sorting-Radio'></div>
    //                     <span className='Sorting-Type'>По удаленности</span>
    //                 </label>
    //             </div>
    //         </div>
    //         <div className='Catalogue'>
    //             {data.map(item => 

    //                 <div className='Card'>
    //                     <img src={item.images[0]} className='Card-Image' alt='Polo'></img>
    //                     <p className='Card-Model'>{item.model_name}</p>
    //                     <p className='Card-Price'>{formatPrice(item.price)} ₽</p>
    //                     <div className='Features'>
    //                         <p className='Features-Title'>Особенности:</p>
    //                         <ul className='Features-List'>
    //                             <li>Штампованые диски</li>
    //                             <li>Галогеновые фары</li>
    //                             <li>Электропривод зеркал</li>
    //                         </ul>
    //                         <p className='Features-Other'>ещё 27 особенностей</p>
    //                     </div>
    //                     <div className='Dealer'>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" className='icon-location'>
    //                             <g fillRule="evenodd">
    //                                 <path d="M249.1,82c54.4,0,113.1,33.7,114.9,124.2c0,78.4-88.8,175.8-109.7,198.5c-1.7,1.8-6.9,1.8-8.7,0
    //                                 C224.8,383.8,136,286.3,136,206.2C136,115.7,193.8,82,249.1,82z M249.9,230.8c19.9,0,36-16.1,36-35.9s-16.1-35.9-36-35.9
    //                                 s-36,16.1-36,35.9C213.9,214.7,230,230.8,249.9,230.8L249.9,230.8z"/>
    //                             </g>
    //                         </svg>
    //                         <span className='Dealer-Name'>{item.dealer.name}</span>, 
    //                         <span className='Dealer-City'>{item.dealer.city}</span>, 
    //                         <span className='Dealer-Distance'>10 км</span>
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     </div>
	// );
}

export default Main;
