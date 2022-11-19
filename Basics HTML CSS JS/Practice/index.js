const values = [
  { id: 1, title: "car" },
  { id: 2, title: "van" },
  { id: 3, title: "bus" },
  { id: 4, title: "train" },
  { id: 5, title: "flight" },
];

let map = values.map((el) => {
  return el.title.toUpperCase();
});
let filter = values.filter((el) => {
  return el.id % 2 == 0;
});

console.log("map: " + map);
console.log(filter);
const va = ["car", "van", "bus", "train","flight","rocket"];
const va1 = ["car", "van", "bus", "train","flight","rocket"];
let splice = va1.splice(0, 4);
console.log("splice: " + splice);
console.log("After splice its removed from the array: "+va1);
let slice = va.slice(0,4);
console.log("slice: " + slice);
console.log("After splice it does not removed from the array: " +va);
