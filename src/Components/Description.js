import React from 'react';
import products from '../Product';

const Description = () => {
  return (
    <div>
      <p>{products.description}</p>
    </div>    
  );
};

export default Description;