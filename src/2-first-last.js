export const firstLast = (items) => {
  if (items[0] === undefined) {
    return 'No items!'
  } else if (items[1] === undefined) {
    return `Only item: ${items[0]}`
  } { 
  return `First: ${items[0]}, Last: ${items[items.length -1]}`
}}
