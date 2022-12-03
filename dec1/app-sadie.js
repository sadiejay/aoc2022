//! part 1 — find elf carrying the highest number of items


// get Data
export const getData = async (inputFile) => {
    let rawInputs = await fetch(inputFile)
        .then(response => response.text());
    return rawInputs;
};

getData('data.txt')

// this is the regex for a double space = new elf
// const regex = /(\n)+/+g;
// write the code that processes data
export const processData = (rawInputs) => {
  // console.log(rawInputs);

  let array = [];
  // let inputs = rawInputs.split(/\n/);
  // let inputs = parseInt(rawInputs);
  let inputs = rawInputs.split(/\n/).map(Number);

  console.log(`This is a list of inputs ${inputs}`);
  //  elves want to eat rations with the highest calorie first
  // we need to parse inputs from line breaks
  //  add all numbers until a '0' is found

  const iterator = inputs[Symbol.iterator]();

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

  // find highest number
  let highestCal = Math.max(...array);
  console.log(`The highest number of cals is ${highestCal}`);
  return highestCal;
  // one elf can carry multiple items
  // one elf = one line break
  // add numbers within line break
};


//
getData('data.txt').then(data => processData(data))
    .then(highestCal => console.log(`🍕 The highest calories is ${highestCal} calories 🍕`));