import Utils from './utils';

const sum = 1;
const multiplication = 2;
const halt = 99;

class AOC {
  part1 = async inputFile => {
    let inputData = await Utils.getInputData(inputFile);
    inputData = inputData.split(',');
    console.log('inputData - ', inputData);
    inputData[1] = 12;
    inputData[2] = 2;

    let counter = 0;
    while (AOC.computeInstruction(inputData, counter)) {
      counter++;
    }

    console.log('inputData - ', inputData);
  };

  part2 = async inputFile => {
    const inputData = await Utils.getInputData(inputFile);
    AOC.searchRightInstructions(inputData);
    console.log('done');
  };

  static searchRightInstructions(inputData) {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        const inputDataArray = inputData.split(',');
        inputDataArray[1] = i;
        inputDataArray[2] = j;

        console.log(' i = ', i, ' j = ', j);
        let counter = 0;
        while (AOC.computeInstruction(inputDataArray, counter)) {
          counter++;
        }
        console.log('inputDataArray[0] = ', inputDataArray[0]);
        if (inputDataArray[0] === 19690720) {
          console.log('noun = ', i);
          console.log('verb = ', j);
          console.log('result = ', i * 100 + j);
          console.log('inputDataArray - ', inputDataArray);
          return;
        }
      }
    }
  }

  static computeInstruction = (data, counter) => {
    const position1 = counter * 4;

    const instruction = data[position1];
    const noun = parseInt(data[data[position1 + 1]]);
    const verb = parseInt(data[data[position1 + 2]]);
    const destination = data[position1 + 3];

    let result = 0;
    switch (parseInt(instruction)) {
      case sum:
        result = noun + verb;
        break;

      case multiplication:
        result = noun * verb;
        break;

      case halt:
        return false;

      default:
        return false;
    }

    data[destination] = result;

    return true;
  };
}

export default AOC;
