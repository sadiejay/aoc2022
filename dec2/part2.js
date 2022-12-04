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

  // takes oppCol and SecCol arrays and group pairs into arrays
  //   let testing = [];
  //   var A = ['A', 'B', 'C', 'D'];
  //   var B = ['Q', 'W', 'E', 'R'];
  let outComeScoreArr = oppArray.map(function (n, i) {
    // console.log(B[i]);
    // returns an array where oppCol/secCol
    return `${n}${secColArray[i]}`;
  });
  console.log(outComeScoreArr);

  // takes outComeScoreArr and translates to outComeScore
  let outComeScoreNum = 0;
  let totRoundScoreArr = [];
  outComeScoreArr.forEach((pair) => {
    outComeScoreNum = 0;
    switch (pair) {
      // AX = 3
      case "AX":
        outComeScoreNum += 3;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // AY = 4
      case "AY":
        outComeScoreNum += 4;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // AZ = 8
      case "AZ":
        outComeScoreNum += 8;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // BX = 1
      case "BX":
        outComeScoreNum += 1;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // BY = 5
      case "BY":
        outComeScoreNum += 5;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // BZ = 9
      case "BZ":
        outComeScoreNum += 8;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // CX = 2
      case "CX":
        outComeScoreNum += 2;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // CY = 6
      case "CY":
        outComeScoreNum += 6;
        totRoundScoreArr.push(outComeScoreNum);
        break;
      // CZ = 7
      case "CZ":
        outComeScoreNum += 7;
        totRoundScoreArr.push(outComeScoreNum);
        break;
    }
    // added all the outComeScores to totRoundScoreArr
    console.log(totRoundScoreArr);
    outComeScoreNum = 0;
  });

  // adding outComeScores within the totRoundScoreArr
  let totRoundScoreNum = totRoundScoreArr.reduce((a, b) => a + b, 0);
  console.log(totRoundScoreNum);
  return totRoundScoreNum;

  // end processData
};

// spit out results
getDatap2("test.txt")
  .then((data) => processDatap2(data))
  .then((totalSecColScore) =>
    console.log(`🪨📄✂️ The total score is ${totalSecColScore} points 🪨📄✂️`)
  );
