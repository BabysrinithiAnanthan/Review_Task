import React from 'react';

const Card = ({ category }) => (
  <div className={`category-card py-5 border px-5 rounded-3 text-center cursor-pointer  ${category.selected ? 'border-primary border-3 bg-light-blue' : ''}`}>
   
    <img src={category.img} alt={category.name} style={{ width: '80px', marginBottom: '20px' }} />
    
    <div className="small fw-bold" style={{ fontSize: '20px' }}>{category.name}</div>
  
  </div>
);

export default Card;