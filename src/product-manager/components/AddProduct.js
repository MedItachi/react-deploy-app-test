import { useState } from "react";

export function AddProduct({ addProuctHandler }) {
  const [products, setProducts] = useState({
    id: 0,
    name: "Nom du produit",
    price: 0,
    quantity: 0,
  });

  //   Interne event handler
  function changeHandler(event) {
    const { name, value } = event.target;
    setProducts({ ...products, [name]: value });
  }

  // Conntrolled Input Component

  return (
    <fieldset className="add-product">
      <legend>Nouveau Produit</legend>
      <div>
        <label htmlFor="if">Id : </label>
        <input
          type="text"
          name="id"
          onChange={changeHandler}
          value={products.id}
        />
      </div>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={products.name}
        />
      </div>
      <div>
        <label htmlFor="name">Price : </label>
        <input
          type="text"
          name="price"
          onChange={changeHandler}
          value={products.price}
        />
      </div>
      <div>
        <label htmlFor="quantity">quantity : </label>
        <input
          type="text"
          name="quantity"
          onChange={changeHandler}
          value={products.quantity}
        />
      </div>
      <div>
        <button onClick={(event) => addProuctHandler(event, products)}>
          Ajouter
        </button>
      </div>
    </fieldset>
  );
}
