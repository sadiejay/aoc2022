// import { getData, processData } from "./part1.js";
import { getDatap2, processDatap2 } from "./part2.js";

// part 1 tests
// getData("test.txt").then((data) => {
//   let result = processData(data);
//   let expected = 15;
//   console.log("p1- test.txt", result === expected, { result, expected });
// });

// part 2 tests
getDatap2("test.txt").then((data) => {
  let result = processDatap2(data);
  let expected = 12;
  console.log("p2- test.txt", result === expected, { result, expected });
});

