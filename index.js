//question01
export function addString(a, b) {
  if(typeof a === "string" || typeof b === "string"){
    return a + b;
  } else {
    return -1
  }
}

//question02
export function toNumber(str) {
  return parseInt(str, 10)
}

//question03
const fruit = ["orange", "apple", "peach"];
export function filterOrange(arr){
  return arr.filter((e) => e === "orange")
}
