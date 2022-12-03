getData("test.txt").then((data) => {
  let result = processData(data);
  let expected = 15;
  console.log("p1- test.txt", result === expected, { result, expected });
});
