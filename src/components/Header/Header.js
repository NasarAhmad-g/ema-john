import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <div className='nav'>
                <ul>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Order Review</a></li>
                    <li><a href="">Manage Invantory</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;