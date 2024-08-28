import React, { useState } from 'react';
import "./ExploreContainer.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ExploreContainer = ({ question }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    return (
        <div className='explore'>
            <div className='exploreContainer' onClick={handleClick}>
                <div className='exploreTitle'>
                    <h3>{question.title}</h3>
                    <KeyboardArrowDownIcon />
                </div>
                {open && (
                    <ul>
                        {question.infos.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ExploreContainer;
