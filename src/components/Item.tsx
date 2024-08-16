export default function Item({ number, useSpan }) {
  if (useSpan) {
    return <span>Tag span, Item: {number}</span>;
  }
  return <p>Tag p, Item: {number}</p>;
}
