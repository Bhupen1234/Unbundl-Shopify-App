import React, { useState } from "react";

const CustomPack = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    updateTotalPrice(updatedItems);
  };

  const removeItem = (item) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems(updatedItems);
    updateTotalPrice(updatedItems);
  };

  const updateTotalPrice = (selectedItems) => {
    const newTotalPrice = selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  return (
    <div>
      <h2>Custom Chocolate Pack</h2>
      <div>
        <h3>Selected Items:</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} ({item.quantity} x ${item.price}){" "}
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
      <div>
        <h3>Add Items:</h3>
        {/* Here, you can provide a list of items to choose from */}
        {availableItems.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addItem(item)}>Add to Pack</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPack;


