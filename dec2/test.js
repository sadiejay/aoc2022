import { getData, processData } from "./part1.js";
// import { getDatap2, processDatap2 } from "./part2.js";
getData("test.txt").then((data) => {
  let result = processData(data);
  let expected = 15;
  console.log("p1- test.txt", result === expected, { result, expected });
});
