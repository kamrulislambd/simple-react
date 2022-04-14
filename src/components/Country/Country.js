import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country-container'>
            <img src={props.flags} alt="" />
            <h2>{props.name}</h2>
            <p>Region : {props.region}</p>
            <p>Capital : {props.capital}</p>
            <p>Population : {props.population}</p>
        </div>
    );
};

export default Country;