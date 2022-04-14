import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='navigation'>
                <a href="/home">Home</a>
                <a href="/country">Country List</a>
                <a href="/map">World Map</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;