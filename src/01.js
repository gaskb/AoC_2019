import Utils from './utils';

console.log('Utils');
console.log(Utils.toString());

class AOC {
  part1 = async inputFile => {
    const inputData = await Utils.getInputData(inputFile);
    let totalFuel = 0;
    for (const starMass of await Utils.getDataRows(inputData)) {
      totalFuel = totalFuel + AOC.getFuelNeeded(starMass);
    }

    console.log('totalFuel = ', totalFuel);
  };

  part2 = async inputFile => {
    const inputData = await Utils.getInputData(inputFile);
    let totalFuel = 0;
    for (const starMass of await Utils.getDataRows(inputData)) {
      totalFuel += AOC.getExtraFuelNeeded(starMass);
    }

    console.log('totalFuel = ', totalFuel);
  };

  static getFuelNeeded = starMass => {
    const fuel = Math.trunc(starMass / 3) - 2;
    return fuel;
  };

  static getExtraFuelNeeded = starMass => {
    let fuel = Math.trunc(starMass / 3) - 2;
    if (fuel > 2) {
      fuel += AOC.getExtraFuelNeeded(fuel);
    }
    return fuel > 0 ? fuel : 0;
  };
}

export default AOC;
