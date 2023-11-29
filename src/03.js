import Utils from './utils';

const sum = 1;
const multiplication = 2;
const halt = 99;

class AOC {
  part1 = async inputFile => {
    let inputData = await Utils.getInputData(inputFile);
    inputData = inputData.split('\n');

    const inputData1 = inputData[0].split(',');
    const inputData2 = inputData[1].split(',');

    const cable1Map = AOC.computeInstructions(inputData1);
    const cable2Map = AOC.computeInstructions(inputData2);

    console.log('inputData - ', inputData);
  };

  part2 = async inputFile => {
    console.log('Nothing to do');
  };

  static computeInstructions = inputData => {
    const map = AOC.initMap(1000, 1000);
    for (let i = 0; i < inputData.length; i++) {
      AOC.computeInstruction(inputData[i], map);
    }
  };

  static computeInstruction = (inputData, map) => {
    //
  };

  static initMap = (xMax, yMax) => {
    const map = [];

    for (let x = 0; x <= xMax; x++) {
      if (!map[x]) {
        map[x] = [];
      }
      for (let y = 0; y <= yMax; y++) {
        map[x][y] = 0;
      }
    }
  };
}

export default AOC;
