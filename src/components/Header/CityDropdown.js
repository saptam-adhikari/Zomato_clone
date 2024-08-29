import React, { useState } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./CityDropdown.css"

const CityDropdown = () => {
    const [citySearch, setCitySearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    
    const cities = ["Bhubaneswar, India", "Cuttack, India", "Puri, India", "Rourkela, India", "Sambalpur, India"];
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setCitySearch(value);
        setShowDropdown(true);

        if (value.length > 0) {
            const filteredCities = cities.filter(city =>
                city.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredCities);
        } else {
            setSuggestions([]);
        }
    };

    const handleCitySelect = (city) => {
        setCitySearch(city);
        setShowDropdown(false);
    };

    return (
        <div className="city-dropdown">
            <div className="city-input">
                <FmdGoodIcon size={24} color="red" />
                <input
                    type="text"
                    value={citySearch}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                />
                <KeyboardArrowDownIcon />
            </div>
            {showDropdown && suggestions.length > 0 && (
                <div className="dropdown-menu">
                    {suggestions.map((city, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleCitySelect(city)}
                        >
                            {city}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CityDropdown;
