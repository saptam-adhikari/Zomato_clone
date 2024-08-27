import "./Card.css"
import React from 'react'

const Card = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="img1"/>
        <h1>Order Online</h1>
        <span>Stay home and order to your doorstop</span>
      </div>
      <div className="cardImg">
        <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="img2"/>
        <h1>Dinning</h1>
        <span>View the city's favourite dining venues</span>
      </div>
      <div className="cardImg">
        <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="img3"/>
        <h1>Nightlife and Clubs</h1>
        <span>Explore the city's top nightlife outlets</span>
      </div>
    </div>
  )
}

export default Card
