import { useState } from "react";
import Item from "./Item";

export default function List() {
  const [items, setItems] = useState([
    { id: 1, useSpan: false },
    { id: 2, useSpan: false },
    { id: 3, useSpan: true },
  ]);

  function reverse() {
    const newItems = [...items];
    newItems.reverse();
    setItems(newItems);
  }
  return (
    <div>
      {items.map((item) => {
        return <Item key={item.id} {...item} number={item.id}></Item>;
      })}
      <p></p>
      <button onClick={reverse}>Reverse</button>
      <p></p>
    </div>
  );
}
