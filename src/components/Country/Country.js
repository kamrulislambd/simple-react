import React from 'react';
import './Country.css';

const Country = (props) => {
    const{name, flags, region, capital, area, population} = props.country;
    return (
        <div className='country-container'>
            <img src={flags.png} alt="" />
            <h2>{name}</h2>
            <p>Region : {region}</p>
            <p>Capital : {capital}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;