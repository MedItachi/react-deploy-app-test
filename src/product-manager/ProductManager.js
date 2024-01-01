import { useState } from "react";
import { AddProduct } from "./components/AddProduct";
import DataGrid from "./components/DataGrid";
import products from "./data/products";
import "./ProductManager.css";

export default function ProductManager() {
  let [productList, setProductList] = useState(products);
  function addProuctHandler(e, product) {
    e.preventDefault();
    setProductList((ov) => [...ov, product]);
  }
  return (
    <div>
      <h1>Gestion de Produits</h1>
      <AddProduct addProuctHandler={addProuctHandler} />
      <DataGrid title="Liste des Produits" data={productList} />
    </div>
  );
}
