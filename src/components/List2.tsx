import { useState } from "react";
import Item from "./Item";

export default function List() {
  const [useSection, setUseSection] = useState(false);
  if (useSection) {
    return (
      <div className="section">
        <h2> Example 2: Toggle the whole code section </h2>
        <Item useSpan={false} number={1}></Item>
        <Item useSpan={false} number={2}></Item>
        <Item useSpan={false} number={3}></Item>
        <button onClick={() => setUseSection(!useSection)}>
          {" "}
          Toggle parent from section 1 to section 2
        </button>
      </div>
    );
  }
  return (
    <div className="section">
      <h2> Example 2: Toggle the whole code section </h2>
      <Item useSpan={false} number={1}></Item>
      <Item useSpan={false} number={2}></Item>
      <Item useSpan={false} number={3}></Item>
      <button onClick={() => setUseSection(!useSection)}>
        {" "}
        Toggle parent from section 2 to section 1
      </button>
    </div>
  );
}
