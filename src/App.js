import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="lg:text-9xl py-5 text-6xl">🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDeleteItems, onToggleItem }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 you have x item on your list, and you already packed x (x%)</em>
    </footer>
  );
}
