import { useState } from "react";

export default function List() {
  const [count, setCount] = useState(0)
  function renderDOM() {
    return <>
      Count: {count}
      <br></br>
      <button onClick={() => setCount(count + 1)}> Increase</button>
    </>
  }
  return <div className="section">
    <h2>Example 3: Using function to render DOM</h2>
    {renderDOM()}
  </div>
}
