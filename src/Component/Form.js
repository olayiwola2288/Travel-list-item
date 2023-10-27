 import { useState } from "react";
 export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity("");
  }

  return (
    <form
      className=" add-form lg:flex justify-center py-6 bg-[#e5771f] "
      onSubmit={handleSubmit}
    >
      <h3 className="text-center">what do you need for your 😍 trip?</h3>
      <select
        className="ms-5 mb-5 lg:mb-0 px-8"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <button className="ms-5 mb-5 lg:mb-0 px-8">Add</button>
      <input
        type="text"
        placeholder="item..."
        className="ms-5 "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}