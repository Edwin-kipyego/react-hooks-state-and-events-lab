import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Event handler to toggle the cart state
  function handleAddToCart() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
