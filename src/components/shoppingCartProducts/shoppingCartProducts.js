import React from 'react';
import noResults from '../../Images/noResults.jpg';

function shoppingCartProducts({products, filterProducts, addToCart}) {
  return (
    <div className='productList'>
      {filterProducts.length === 0 ? (
        <img src={noResults}/>
      ):(
        filterProducts.map((product) => (<div className='product' key={product.id}>
          <img src={product.image} alt={product.name}/>
          <h2>{product.name} </h2>
          <p>Price: £{product.price}</p>
          <button className='addToCart'
          onClick={() => addToCart(product)}>
            Add to cart
          </button>
          </div>
        ))
      )}
    </div>
  )
}

export default shoppingCartProducts;
