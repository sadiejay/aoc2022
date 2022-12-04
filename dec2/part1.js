// ! part 1 -
//  sounds like I need an object for selected shapes and an object for round outcome
// data needs odd inputs to be pushed to an array and even inputs pushed to an array
// need switch statements for each possiblity
// selected shapes isn't something that's "calulated" as opposed to round outcome
// once round outcome is calculated selected shape needs to be added

// const selectedShapes = [
//     {
//         shape: 'rock',
//         shapePoints: 1,
//         winsOver: 'scissors',
//         losesOver: 'paper',
//         oppCode: 'A',
//         secCol: 'X',
//     },
//     {
//         shape: 'paper',
//         shapePoints: 2,
//         winsOver: 'rock',
//         losesOver: 'scissors',
//         oppCode: 'B',
//         secCol: 'Y',
//     },
//     {
//         shape: 'scissors',
//         shapePoints: 3,
//         winsOver: 'paper',
//         losesOver: 'rock',
//         oppCode: 'C',
//         secCol: 'Z',
//     }
// ]

// const roundOutcome = [
//     {
//         winPoints: 6,
//         drawPoints: 3,
//         losePoints: 0,
//     }
// ]

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
  let inputs = [...new Set (rawInputs.split(/[\s\n\n]+/))];
  console.log(inputs);

//   divides array into two this is oppArray
//   let oppArray = [];
//   function evenInputs(inputs) {
//     for (let i = 0; i < inputs.length; i += 2) {
//       oppArray.push(inputs[i]);
//     }
//   }

//   this is secCol array
//   let secColArray= [];
//   function oddInputs(inputs) {
//     for (let i = 1; i < inputs.length; i += 2) {
//     secColArray.push(inputs[i]);
//     }
//   }
// runs function
//   evenInputs(inputs);
//   oddInputs(inputs);
//   console.log(`Opp array is ${oppArray} and SecCol array is ${secColArray}`);

//   testing accessing an object for a value
//   const shapeArr = selectedShapes.map((shape) => shape.shape);
//   console.log(`${shapeArr}`);


//  take the data array
//  find respective key from data (either oppCode or secCol)


// another option
//  make groups of inputs from 2 charaters
//  then create switch statements for potential outcomes
//      ex. if A Z then shapeScore=+x and outcomeScore =+y
//      ex. if A Z then totalScore=+z
//      return totalScore

// takes 2 elements in the array and creates a new array
// function* chunks(arr, n) {
//   for (let i = 0; i < arr.length; i += n) {
//     yield arr.slice(i, i + n);
//   }
// }

// let chunkedInputsArrs = [...chunks(inputs, 2)];
// console.log(chunkedInputsArrs);



// end processData
};




// spit out results
getData('test.txt').then(data => processData(data))
    .then(totalScore => console.log(`🪨📄✂️ The total score is ${totalScore} calories 🪨📄✂️`));