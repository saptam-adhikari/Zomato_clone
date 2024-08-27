import React from 'react'
import "./Header.css"
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Header = () => {
  return (
    <div className='header'>
        <nav className='nav-section'>
            <span>Get the App</span>
            <div className='right'>
                <span>Investor Relations</span>
                <span>Add resturant</span>
                <span>Log in</span>
                <span>Sign in</span>
            </div>
        </nav>

        <hero className='header-content'>
            <img src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' alt='zomato'/>
            <h3>Discover the best food & drinks in Bhubaneswar</h3>
            <div className='input'>
                <select>
                    <option><FmdGoodIcon  size={24} color="red" /> Bhubaneswar</option>
                </select>
                <input type='text' placeholder='Search for resturant, cuisine or a dish'/>
            </div>
        </hero>
      
    </div>
  )
}

export default Header
