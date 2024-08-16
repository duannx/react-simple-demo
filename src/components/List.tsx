import { useState } from "react";
import Item from "./Item";

export default function List() {
  const [useSpan, setUseSpan] = useState(false);
  const [useSection, setUseSection] = useState(false);
  if (useSection) {
    return (
      <section>
        <Item useSpan={false} number={1}></Item>
        <Item useSpan={false} number={2}></Item>
        <Item useSpan={useSpan} number={3}></Item>
        <p></p>
        <button onClick={() => setUseSpan(!useSpan)}> Toggle Item 3</button>
        <p></p>
        <button onClick={() => setUseSection(!useSection)}>
          {" "}
          Toggle parent div
        </button>
      </section>
    );
  }
  return (
    <div>
      <Item useSpan={false} number={1}></Item>
      <Item useSpan={false} number={2}></Item>
      <Item useSpan={useSpan} number={3}></Item>
      <p></p>
      <button onClick={() => setUseSpan(!useSpan)}> Toggle Item 3</button>
      <p></p>
      <button onClick={() => setUseSection(!useSection)}>
        {" "}
        Toggle parent div
      </button>
    </div>
  );
}
