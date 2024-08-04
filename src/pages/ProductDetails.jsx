import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();

  return (
    <div>
        <h1>Product Details</h1>
        <p>{params.productId}</p>
    </div>
  )
}

export default ProductDetails