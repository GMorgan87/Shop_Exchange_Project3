import React from 'react'

const ProductDetails = (props) => {
 
    
  return (
    <div className="product-details">
      <details>
      <summary>
      <p>name: {props.product.name} </p>
      <p>qty:{props.product.qty}</p>
      </summary>
      <p>desc: {props.product.description} </p>
      <p>category: {props.product.category.name} </p>
      <p>status: {props.product.status} </p>
      <p>rent condition: {props.product.rentCondition} </p>
      <p>replace status: {props.product.replaceStatus} </p>
      </details>
    </div>
  )
}

export default ProductDetails