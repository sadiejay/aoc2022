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

  // translates letters to shapeScore
  let shapeScoreArr = [];
  let shapeScoreNum = 0;

  inputs.forEach((input) => {
    switch (input) {
      case "A":
      case "X":
        shapeScoreNum += 1;
        break;
      case "B":
      case "Y":
        shapeScoreNum += 2;
        break;
      case "C":
      case "Z":
        shapeScoreNum += 3;
        break;
    }
    shapeScoreArr.push(shapeScoreNum);
    shapeScoreNum = 0;
  });
  console.log(shapeScoreArr);

  // divides array into two this is oppArray
  let oppArray = [];
  function evenInputs(shapeScoreArr) {
    for (let i = 0; i < shapeScoreArr.length; i += 2) {
      oppArray.push(shapeScoreArr[i]);
    }
  }

  // this is secCol array
  let secColArray = [];
  function oddInputs(shapeScoreArr) {
    for (let i = 1; i < shapeScoreArr.length; i += 2) {
      secColArray.push(shapeScoreArr[i]);
    }
  }
  // runs function
  evenInputs(shapeScoreArr);
  oddInputs(shapeScoreArr);
  console.log(`Opp array is ${oppArray} and SecCol array is ${secColArray}`);

  // dividing the oppCol and SecCol
  let testing = [];
  // var A = [2, 6, 12, 18];
  // var B = [2, 3, 4, 6];
  var shapeScoreFraction = oppArray.map(function (n, i) {
    console.log(secColArray[i]);
    // returns an array where oppCol/secCol
    return n / secColArray[i];
  });

  console.log(shapeScoreFraction);

	// takes shapeScoreFractions and translates to outComeScore
	let outComeScoreArr = [];
	let outComeScoreNum = 0;

	shapeScoreFraction.forEach((fraction) => {
		switch (fraction) {
      // if fraction = 3/2 --> outCome score = 0 (l)
      // if fraction = 2 --> outCome score = 0 (l)
      // if fraction = 1/3 --> outCome score = 0 (l)
      case 1 / 3:
      case 3 / 2:
      case 2:
        outComeScoreNum += 0;
        break;
      // if fraction = 1/2 --> outCome score = 6 (w)
      // if fraction = 2/3 --> outCome score = 6 (w)
      // if fraction = 3 --> outCome score = 6 (w)
      case 1 / 2:
      case 2 / 3:
      case 3:
        outComeScoreNum += 6;
        break;
      // if fraction = 1 --> outCome score = 3 (draw)
      case 1:
        outComeScoreNum += 3;
        break;
    }
		// added all the outComeScores
    console.log(outComeScoreNum);
	});

	// adding SecCol shapeScores within the secColArray numbers
	let secColShapeScores = secColArray.reduce((a, b) => a + b, 0);
	console.log(secColShapeScores);
	// adds SecColShapeScores with OutComeScoreNum to get totalSecColScore
	const  totalSecColScore = secColShapeScores + outComeScoreNum;
	console.log(totalSecColScore);
	return totalSecColScore;

  // end processData
};




// spit out results
getData("test.txt")
  .then((data) => processData(data))
  .then((totalSecColScore) =>
    console.log(`🪨📄✂️ The total score is ${totalSecColScore} points 🪨📄✂️`)
  );