// ! part 2 -
// take rawInputs separate into 2 arrays --> (oppArrLetters SecColLetters)
// translate oppArrLetters into numbers --> (oppArrNum)
// run oppArrNum into equation for SecColLetters where:
    // x = n
    // y = n+3
    // z = n+6
    // n = oppArrNum
// increment or take the sum of all the numbers processed to find new totalSecColScore


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
  // console.log(`These are the inputs ${inputs}`);

  // divides array into two this is oppArray
  let oppArray = [];
  function evenInputs(inputs) {
    for (let i = 0; i < inputs.length; i += 2) {
      oppArray.push(inputs[i]);
    }
  }

  // this is secCol array
  let secColArray = [];
  function oddInputs(inputs) {
    for (let i = 1; i < inputs.length; i += 2) {
      secColArray.push(inputs[i]);
    }
  }
  // runs function
  evenInputs(inputs);
  oddInputs(inputs);
  console.log(`Opp array is ${oppArray} and SecCol array is ${secColArray}`);

  // translates oppArray letters to shapeScore
  let shapeScoreArr = [];
  let shapeScoreNum = 0;

  oppArray.forEach((letter) => {
    switch (letter) {
      case "A":
        shapeScoreNum += 1;
        break;
      case "B":
        shapeScoreNum += 2;
        break;
      case "C":
        shapeScoreNum += 3;
        break;
    }
    shapeScoreArr.push(shapeScoreNum);
    shapeScoreNum = 0;
  });
  console.log(shapeScoreArr);

  // takes shapeScoreFractions and translates to outComeScore
  let outComeScoreArr = [];
  let outComeScoreNum = 0;

//   shapeScoreFraction.forEach((fraction) => {
//     switch (fraction) {
//       // if fraction = 3/2 --> outCome score = 0 (l)
//       // if fraction = 2 --> outCome score = 0 (l)
//       // if fraction = 1/3 --> outCome score = 0 (l)
//       case 1 / 3:
//       case 3 / 2:
//       case 2:
//         outComeScoreNum += 0;
//         break;
//       // if fraction = 1/2 --> outCome score = 6 (w)
//       // if fraction = 2/3 --> outCome score = 6 (w)
//       // if fraction = 3 --> outCome score = 6 (w)
//       case 1 / 2:
//       case 2 / 3:
//       case 3:
//         outComeScoreNum += 6;
//         break;
//       // if fraction = 1 --> outCome score = 3 (draw)
//       case 1:
//         outComeScoreNum += 3;
//         break;
//     }
//     // added all the outComeScores
//     console.log(outComeScoreNum);
//   });

  // adding SecCol shapeScores within the secColArray numbers
  let secColShapeScores = secColArray.reduce((a, b) => a + b, 0);
  console.log(secColShapeScores);
  // adds SecColShapeScores with OutComeScoreNum to get totalSecColScore
  const totalSecColScore = secColShapeScores + outComeScoreNum;
  console.log(totalSecColScore);
  return totalSecColScore;

  // end processData
};

// spit out results
getDatap2("test.txt")
  .then((data) => processDatap2(data))
  .then((totalSecColScore) =>
    console.log(`🪨📄✂️ The total score is ${totalSecColScore} points 🪨📄✂️`)
  );
