import logo from '../../images/logo.png'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <div>
                <nav className='navbar'>
                    <a href="./shop">Shop</a>
                    <a href="./review">Review</a>
                    <a href="./inventory">Manage Inventory</a>
                </nav>
            </div>
            
        </div>
    );
};

export default Header;