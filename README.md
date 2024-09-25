This app show how React Reconciliation works

## Example 1: Toggle parent tag
- Toggle parent tag will cause the whole Fiber tree and DOM tree to be destroyed

## Example 2: Toggle the whole code section
- Toggle the whole code section will not destroy the Fiber tree as long as the tag is the same at the same position

## Example 3: Using function to render DOM
- When re-render the component, the Fiber tree will retain because the position and type of element is the same

## Example 4: List with id as key
- Everything works as expected. React will reuse and re-order the Fiber tree by it key

## Example 5: List with index as key
- Fiber tree will be the same. React will not re-order the Fiber tree because the key is equal to the index and its order is unchange. However, React will pass the new data to the Fiber because the source data is changed. It will cause the data is wrong

## Example 6: Update text content and attributes of an element
- Text node will be convert to children of a Fiber element
- Attribute will be convert to props of the Fiber element
- Update a text node or attribute will not affect others