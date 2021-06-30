import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products, setCurrentProductId,onDeleteProduct,searchTerm,sortBy}) => {
  const filteredProducts = products.filter((product) =>
    product.name.includes(searchTerm)
  );
  const sortedProducts = filteredProducts.sort((prodA, prodB) => {
    console.log({ filteredProducts, sortBy });

    const valueA = prodA[sortBy];
    const valueB = prodB[sortBy];
    console.log({ prodA, prodB, valueA });
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
  return (
    <div className="productListContaienr">
      
      {sortedProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          setCurrentProductId={setCurrentProductId}
          onDelete={onDeleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductsList;
