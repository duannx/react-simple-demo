import { useState } from "react";

export default function List() {
  const [count, setCount] = useState(0)
  return <div className="section">
    <h2> Example 6: Update text content and attributes of an element</h2>
    <div data-count={count}>
      Count {count}
    </div>
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  </div>
}
