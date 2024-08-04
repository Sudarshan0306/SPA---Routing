import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();

  return (
    <div>
        <h1>Product Details</h1>
        <p>{params.productId}</p>
        <button><Link to='..' relative='path'>Back</Link></button>
    </div>
  )
}

export default ProductDetails