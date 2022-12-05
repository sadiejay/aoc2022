// ! part 1 -


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