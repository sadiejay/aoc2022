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

  // translates oppArray letters to shapeScore (shapeScore = oppArrNum in notes)
  let shapeScoreArr = [];
  let shapeScoreNum = 0;

  oppArray.forEach((letter) => {
    switch (letter) {
      case "A":
        shapeScoreNum += 3;
        break;
      case "B":
        shapeScoreNum += 2;
        break;
      case "C":
        shapeScoreNum += 1;
        break;
    }
    shapeScoreArr.push(shapeScoreNum);
    shapeScoreNum = 0;
  });
  console.log(shapeScoreArr);

  // takes secColArray and translates to outComeScore
  let outComeScoreArr = [];
  let outComeScoreNum = 0;

  secColArray.forEach((letter, index) => {
      let shapeScoreNum = shapeScoreArr[index];
      console.log(shapeScoreArr);
      console.log(secColArray);
    //   console.log(letter, shapeScoreNum);
      outComeScoreNum = 0;
    switch (letter) {
      // x = n
      // n = oppArrNum
      case "X":
        outComeScoreNum = shapeScoreNum;
        outComeScoreArr.push(outComeScoreNum);
        break;
      // y = n+3
      case "Y":
        outComeScoreNum = shapeScoreNum + 3;
        outComeScoreArr.push(outComeScoreNum);
        break;
      // z = n+6
      case "Z":
        outComeScoreNum = shapeScoreNum + 6;
        outComeScoreArr.push(outComeScoreNum);
        break;
    }
    // added all the outComeScores
    console.log(outComeScoreArr);
    outComeScoreNum = 0;
  });

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
