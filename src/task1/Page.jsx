import React from 'react';
import useApiData from './useApiData'; // Assuming the custom hook is in useApiData.js
import './page.css'; // Import the CSS file
import Loader from './loader/loader';

const ProductList = () => {
  const { data: products, loading, error } = useApiData(
    'https://s3.amazonaws.com/open-to-cors/assignment.json'
  );

  if (loading) {
    return <div className="loading">
        <Loader />
    </div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Product List</h1>
      <ul>
        {products.sort((a, b) => b.popularity - a.popularity).map((product, index) => (
          <li key={index}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Popularity: {product.popularity}</p>
            <p>Subcategory: {product.subcategory}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
