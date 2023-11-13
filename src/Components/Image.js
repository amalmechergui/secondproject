import React from 'react';
import products from '../Product';

const Image = () => {
  return (
    <div>
<img src={products.imageUrl}/>
    </div>
  );
};

export default Image;