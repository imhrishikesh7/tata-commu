import React from 'react'

const Cards = ({ heading} ) => {
  return (
    <div className='card-container'>
        <div className="card">
            <h2 className='CardHeading poppins-light'>{heading}</h2>
            <img className='globe' src="/vector-globe-in-hand.png" alt="" />
            <a className='read-more-btn poppins-regular' href="/">READ MORE {">"}</a>  
        </div>
    </div>
  )
}

export default Cards