import { useState } from "react";
import ItemCount from "./ItemCount";

export default function List() {
  const [items, setItems] = useState([{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }])

  function reverse() {
    const newItems = [...items];
    newItems.reverse();
    setItems(newItems);
  }
  return <div className="section">
    <h2> Example 5: List with index as key</h2>
    {items.map((item, index) => {
      return <ItemCount number={item.id} key={index}></ItemCount>
    })}
    <button onClick={reverse}>
      {" "}
      Reverse
    </button>
  </div>
}
