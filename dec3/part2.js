// ! part 2 -


// get Data
export const getDatap2 = async (inputFile) => {
  let rawInputs = await fetch(inputFile).then((response) => response.text());
  return rawInputs;
};

getDatap2("test.txt");

// write the code that processes data
export const processDatap2 = (rawInputs) => {
  // takes raw input and splits into new array
  let inputs = [...rawInputs.replace(/\n/g, " ").split(" ")];
  console.log(`These are the inputs ${inputs}`);

  // end processDatap2
};

// spit out results
getDatap2("test.txt")
  .then((data) => processDatap2(data))
  .then((lastVariable) =>
    console.log(`🧳 The total score is ${lastVariable} points 🧳`)
  );
