import React from 'react'
import "./Collection.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Collection = () => {
  return (
    <div className='collection'> 
       <h1>Collection</h1>
       <div className='collectionText'>
         <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Bhubaneswar, based on trends</p>
         <span>All collections in Bhubaneswar <ArrowRightIcon/></span>
       </div>
       <div className='collectionCard'>
        <div className='collectionImg'>
            <img src='https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1694690149.jpg?output-format=webp' alt='img'/>
            <h3>7 Best Luxury Dinning Places</h3>
            <span>7 Places<ArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
            <img src='https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1694688879.jpg?output-format=webp' alt='img'/>
            <h3>16 Best Bars & Pubs</h3>
            <span>16 Places<ArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
            <img src='https://b.zmtcdn.com/data/collections/e2a77af428c8806570838ef7bc5c1ed1_1694690561.jpg?output-format=webp' alt='img'/>
            <h3>9 Places for Authentic Odia Cuisine</h3>
            <span>8 Places<ArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
            <img src='https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1694690253.jpg?output-format=webp' alt='img'/>
            <h3>9 Great Cafes</h3>
            <span>9 Places<ArrowRightIcon/></span>
        </div>
       </div>

    </div>
  )
}

export default Collection
