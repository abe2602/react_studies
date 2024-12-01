import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [options, setOptions] = useState("Select a option");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleOptionChange(event) {
    setOptions(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>{name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>{quantity}</p>

      <select value={options} onChange={handleOptionChange}>
        <option value="">Select an Option</option>
        <option value="card">Card</option>
        <option value="pix">PIX</option>
      </select>
    </div>
  );
}

export default MyComponent;
