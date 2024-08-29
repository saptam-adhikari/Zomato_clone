import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CityDropdown from './CityDropdown'; 

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className='header'>
            <nav className='nav-section'>
                <span>Get the App</span>
                <div className='right'>
                    <span>Investor Relations</span>
                    <span>Add restaurant</span>
                    <span>Log in</span>
                    <span>Sign in</span>
                </div>
            </nav>
            <div className='hamburger' onClick={toggleMenu}>
                {open ? <CloseIcon /> : <MenuIcon />}
            </div>

            <div className={`sideMenu ${open ? 'active' : ''}`}>
                <img src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' alt='logo' />
                <div className='innerMenu'>
                    <span>Investor Relations</span>
                    <span>Add restaurant</span>
                    <span>Log in</span>
                    <span>Sign in</span>
                </div>
            </div>

            <div className='header-content'>
                <img src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' alt='zomato' />
                <h3>Discover the best food & drinks in Bhubaneswar</h3>
                <div className='input'>
                    <CityDropdown />
                    <input type='text' placeholder='Search for restaurant, cuisine or a dish' />
                </div>
            </div>
        </div>
    );
};

export default Header;
