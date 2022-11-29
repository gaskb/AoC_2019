// import './appenv';
import AOC from './01';

async function startAoc() {
  const aoc = new AOC();
  await aoc.part1('input/01_1.txt');
  await aoc.part2('input/01_1.txt');
}

startAoc();
