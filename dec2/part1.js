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

	// take input and translate the data into shapeScores
	// take shapeScore for secCol and add
	// create fraction from shapeScores of oppCol and secCol
		// if fraction = 1/3 --> outCome score = 0 (l)
		// if fraction = 1/2 --> outCome score = 6 (w)
		// if fraction = 2/3 --> outCome score = 6 (w)
		// if fraction = 1 --> outCome score = 3 (draw)
		// if fraction = 3/2 --> outCome score = 0 (l)
		// if fraction = 2 --> outCome score = 0 (l)
		// if fraction = 3 --> outCome score = 6 (w)

// end processData
};




// spit out results
getData("test.txt")
  .then((data) => processData(data))
  .then((totalSecColScore) =>
    console.log(`🪨📄✂️ The total score is ${totalSecColScore} points 🪨📄✂️`)
  );