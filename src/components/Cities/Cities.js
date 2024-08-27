import React, { useState } from 'react';
import "./Cities.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Cities = () => {
  const [showMore, setShowMore] = useState(false); 

  const handleToggle = () => {
    setShowMore(!showMore); 
  };

  return (
    <div className='cities'>
      <h1>Popular localities in and around <span>Bhubaneswar</span></h1>
      <div className='cityContainer'>
        <div className='city'>
          <div className='cityleft'>
            <h3>Patia</h3>
            <span>674 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>
        <div className='city'>
          <div className='cityleft'>
            <h3>Chandrasekharpur</h3>
            <span>333 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>
        <div className='city'>
          <div className='cityleft'>
            <h3>Sahid Nagar</h3>
            <span>224 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>
        <div className='city'>
          <div className='cityleft'>
            <h3>Jaydev Vihar</h3>
            <span>119 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>
        <div className='city'>
          <div className='cityleft'>
            <h3>Nayapalli</h3>
            <span>167 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>
        <div className='city'>
          <div className='cityleft'>
            <h3>Kharabela Nagar</h3>
            <span>157 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>
        <div className='city'>
          <div className='cityleft'>
            <h3>Unit 4</h3>
            <span>89 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>
        <div className='city'>
          <div className='cityleft'>
            <h3>Lakshmi Sagar</h3>
            <span>145 places</span>
          </div>
          <div className='icon'>
            <NavigateNextIcon />
          </div>
        </div>


        {showMore && (
          <>
            <div className='city'>
              <div className='cityleft'>
                <h3>Gajapati Nagar</h3>
                <span>31 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Ashok Nagar</h3>
                <span>64 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Khandagiri</h3>
                <span>135 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Jagamohan Nagar</h3>
                <span>131 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Satya Nagar</h3>
                <span>52 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Bapuji Nagar</h3>
                <span>165 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>BJB Nagar</h3>
                <span>139 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Kalinga Nagar</h3>
                <span>165 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Baramunda</h3>
                <span>111 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Surya Nagar</h3>
                <span>51 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Forest Park</h3>
                <span>29 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
            <div className='city'>
              <div className='cityleft'>
                <h3>Patrapada</h3>
                <span>122 places</span>
              </div>
              <div className='icon'>
                <NavigateNextIcon />
              </div>
            </div>
          </>
        )}

       
        {!showMore && (
          <div className='city' onClick={handleToggle} style={{ cursor: 'pointer' }}>
            <div className='cityleft'>
              <h3>See more</h3>
            </div>
            <div className='icon'>
              <NavigateNextIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cities;
