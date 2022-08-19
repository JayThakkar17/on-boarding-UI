import React from 'react';

const Card = ({ cardImg, cardLabel, cardDesc }) => {
  return (
    <div className='card-wrapper'>
      <img className='card-images' src={cardImg} alt='card'/>
      <p className="card-label">{cardLabel}</p>
      <p className="card-desc">{cardDesc}</p>
    </div>
  );
};

export { Card };
