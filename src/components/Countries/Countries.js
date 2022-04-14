import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);

    return (
        <div className='container'>
            
            {
                countries.map(country => <Country 
                    name={country.name} 
                    flags={country.flags.png}
                    capital={country.capital}
                    region={country.region}
                    population={country.population}
                    ></Country>)
            }

        </div>
    );
};

export default Countries;