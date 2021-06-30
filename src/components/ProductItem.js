import React from "react";

const ProductItem = ({ product, setCurrentProductId,onDelete}) => {
  return (
    <button
      className="productItemContainer"
      key={product.id}
      onClick={() => setCurrentProductId(product.id)}
    >
      <img
        src="https://i.ibb.co/7r3Vb84/buy.png"
        width="20%"
        height="18%"
        alt="product image"
      />
      
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <button className="deleteButton" onClick={()=>{onDelete(product.id)}}>Delete</button>
    </button>
  );
};

export default ProductItem;
