import React, { useState } from "react";

const ITEMS = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export default function CustomCombobox() {
  const [items, setItems] = useState([]);
  const [input, setinputs] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddOption = (items) => {
    setItems((prev) => [...prev, items]);
  };

  const handleDeleteItems = (option) => {
    const filteredItems = items.filter((i) => i !== option);
    setItems(filteredItems);
  };

  const filterItems = ITEMS.filter(
    (i) => !items.includes(i) && i.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <>
      <div className="wrapper">
        <div
          onClick={() => setOpen(true)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "8px",
            width: "180px",
          }}
        >
          {items.map((items) => (
            <button key={items}>
              {items}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteItems(items);
                }}
                style={{ cursor: "pointer" }}
              >
                x
              </span>
            </button>
          ))}
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setinputs(e.target.value);
              setOpen(true);
            }}
            style={{
              outline: "none",
              border: "none",
              flex: 1,
              maxWidth: "60px",
            }}
          />
        </div>
        {open && (
          <ul
            style={{
              border: "1px solid black",
              borderRadius: "6px",
              padding: "4px",
              margin: "4px 0 0 0",
              listStyle: "none",
              maxHeight: "150px",
              overFlowY: "auto",
              width: "180px",
            }}
          >
            {filterItems.map((items) => (
              <li
                onClick={() => {
                  handleAddOption(items);
                  setOpen(false);
                  setinputs("");
                }}
                key={items}
                style={{ cursor: "pointer" }}
              >
                {items}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
