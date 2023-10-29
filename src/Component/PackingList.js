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
      <div className="bg-[#5a3e2b] text-[#ffebb3] lg:flex justify-center gap-5 pb-5 ">
        <div className="lg:flex lg:gap-5">
          <div className="mt-5 flex flex-col justify-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-center text-[#5a3e2b] mx-20"
            >
              <option value="input" className="text-[#5a3e2b]">
                sort by input order
              </option>
              <option value="description" className="text-[#5a3e2b]">
                sort by description
              </option>
              <option value="packed" className="text-[#5a3e2b]">
                sort by packed status
              </option>
            </select>
          </div>

          <div className="flex justify-center flex-col mt-5 mx-20 bg-[#ffebb3] rounded-[20px] py-[0.5]  px-4">
            <button onClick={onClearList} className="text-[#5a3e2b] ">
              Clear list
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
