import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import EditProducts from "../components/EditProducts";
import ProductsList from "../components/ProductsList";
import Pages from "../components/Pages";

const HomePage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "shampoo",
      description: "the best shampoo",
      price: 10,
      creationDate: new Date("11/10/2018").getTime()
    },
    {
      id: 2,
      name: "pencil",
      description: "the best pencil in the world",
      price: 1,
      creationDate: new Date("5/3/2019").getTime()
    },
    {
      id: 3,
      name: "phone",
      description: "redmi sucks",
      price: 1000,
      creationDate: new Date("5/2/2017").getTime()
    }
  ]);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(sortBy)
  const handleDeleteProduct = (productId) => {
    const newProductsList = products.filter(
      (product) => product.id !== productId
    );
    setProducts(newProductsList);
  };
  return (
    <PageContainer setCurrentProductId={setCurrentProductId}
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    setSortBy={setSortBy}
    >
      <ProductsList
        products={products}
        setCurrentProductId={setCurrentProductId}
        onDeleteProduct = {handleDeleteProduct}
        searchTerm={searchTerm}
        sortBy={sortBy}
      />
      <EditProducts
        products={products}
        setProducts={setProducts}
        currentProductId={currentProductId}
      />
      <Pages></Pages>
    </PageContainer>
  );
};

export default HomePage;
