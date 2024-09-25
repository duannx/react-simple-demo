import { useState } from "react";

export default function ItemCount({ number }) {
  const [count, setCount] = useState(0)
  return <p onClick={() => setCount(count + 1)}>Item number: {number}. Total click: {count}</p>;
}
