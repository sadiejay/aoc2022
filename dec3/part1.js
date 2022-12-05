// ! part 1 -
// assumptions:
  // each character string is even
  // character string divided evenly is the amount in the 2 compartments
// need regex:
  //  for spliting the input by line break
  // ! removing all letters that are in common -- could use Set!!
// strat:
  // split each line and add to array (1 element in array = 1 rucksake)
  // take each element and divide in half (one half = 1 compartment)
  // ! remove all letters that are in common (use Set?) put in array
  // find priority for all letters in array
  // add letters in array



// get Data
export const getData = async (inputFile) => {
    let rawInputs = await fetch(inputFile)
        .then(response => response.text());
    return rawInputs;
};

getData('test.txt')

// write the code that processes data
export const processData = (rawInputs) => {
  // takes raw input and splits into new array
  let inputs = [...(rawInputs.replace(/\n/g, " ").split(" "))];
  console.log(`These are the inputs ${inputs}`);

  // end processData
};




// spit out results
getData("test.txt")
  .then((data) => processData(data))
  .then((lastVariable) =>
    console.log(`🧳 The total score is ${lastVariable} points 🧳`)
  );