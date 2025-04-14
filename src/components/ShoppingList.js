import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for category selection
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on the selected category
  const itemsToDisplay = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
