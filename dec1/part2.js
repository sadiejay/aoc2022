//! part 2 — find calorie sum of top 3 elf

// get Data
export const getDatap2 = async (inputFile) => {
  let rawInputs = await fetch(inputFile).then((response) => response.text());
  return rawInputs;
};

getDatap2("data.txt");

// this is the regex for a double space = new elf
// const regex = /(\n)+/+g;
// write the code that processes data
export const processDatap2 = (rawInputs) => {
  // console.log(rawInputs);

  let array = [];
  // let inputs = rawInputs.split(/\n/);
  // let inputs = parseInt(rawInputs);
  let inputs = rawInputs.split(/\n/).map(Number);

  console.log(`This is a list of inputs ${inputs}`);
  //  elves want to eat rations with the highest calorie first
  // we need to parse inputs from line breaks
  //  add all numbers until a '0' is found

  var iterator = inputs[Symbol.iterator]();

  for (let i = 0; i <= inputs.length - 1; i++) {
    //   console.log(`Interating over all inputs${inputs[i]}`);
    let sum = 0;

    // adds numbers until 0 is found = 1 elf
    for (const value of iterator) {
      sum += value;

      if (value === 0) {
        let sum = 0;
        break;
      }
      // console.log(`The highest number of cals is ${Math.max(sum)}`);
    }
    // sum of numbers before 0 / (1 elf)
    // console.log(`This elf is carrying ${(sum)} cals`);
    array.push(sum);
  }
  console.log(`This is a list of elf's calories ${array}`);
  // console.log(`The highest number of cals is ${Math.max(...array)}`);

    //  sort array in numerical order highest to lowest
    let highestToLowest = [...new Set (array.sort((a, b) => b - a))];
    console.log(`New List of elves calories high to low with duplicates removed: ${highestToLowest}`);

    // put first 3 values in new array
    let threeHighestCalArr = array.slice(0, 3);
    console.log(`List # of elves calories high to low ${threeHighestCalArr}`);

    //  doing the same as abouve but renaming variables because idk how to break up this super mega function lololsob
    // used var because idk how to break this up and I can redeclare lolol
    var iterator = threeHighestCalArr[Symbol.iterator]();
    let threeHighestCalSum = 0;
    // add values
        for (const value of iterator) {
          threeHighestCalSum += value;
          console.log(`I'm adding the top x higheset cals ${threeHighestCalSum}`);
        }
        console.log(`The sum of the top x highest number of cals is ${threeHighestCalSum}`);
        return threeHighestCalSum;
};

// spit out results
getDatap2("data.txt")
  .then((data) => processDatap2(data))
  .then((threeHighestCalSum) =>
    console.log(
      `🍕 The sum of the 3 elves with highest calories is ${threeHighestCalSum} calories 🍕`
    )
  );
