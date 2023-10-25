const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="lg:text-9xl py-5 text-6xl">🌴 Far Away 💼</h1>;
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className=" add-form lg:flex justify-center py-6 bg-[#e5771f] " onSubmit={handleSubmit}>
      <h3 className="text-center">what do you need for your 😍 trip?</h3>
      <select className="ms-5 mb-5 lg:mb-0 px-8">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <button className="ms-5 mb-5 lg:mb-0 px-8">Add</button>
      <input type="text" placeholder="item..." className="ms-5 " />
    </form>
  );
}

function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
