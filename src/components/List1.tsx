import { useState } from "react";
import Item from "./Item";

export default function List() {
  const [useSection, setUseSection] = useState(false);
  const CustomTag = useSection ? 'section' : 'div'
  return <div className="section">
    <h2> Example 1: Toggle parent tag</h2>
    <CustomTag>
      <Item useSpan={false} number={1}></Item>
      <Item useSpan={false} number={2}></Item>
      <Item useSpan={false} number={3}></Item>
    </CustomTag>
    <button onClick={() => setUseSection(!useSection)}>
      {" "}
      Toggle parent from {useSection ? 'section' : 'div'} to  {useSection ? 'div' : 'section'}
    </button>
  </div>
}
