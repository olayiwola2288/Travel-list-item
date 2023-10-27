import { useState } from "react";
import Item  from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div className=" actions list">
        <div className="lg:flex">
          <div className="mt-5">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">sort by input order</option>
              <option value="description">sort by description</option>
              <option value="packed">sort by packed status</option>
            </select>
          </div>

          <div className="flex justify-center flex-col mt-5">
            <button onClick={onClearList}>Clear list</button>
          </div>
        </div>
      </div>
    </>
  );
}
