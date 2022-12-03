import { getData, processData } from "./app-sadie.js";

// part 1 tests
getData('test.txt').then(data => {
    let result = processData(data);
    let expected = 24000;
    console.log("p1- test.txt",result === expected, {result,expected});
})