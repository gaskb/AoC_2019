class CableMap {
  map = [];
  xMax = 0;
  yMax = 0;

  constructor(xMax, yMax) {
    this.xMax = xMax;
    this.yMax = yMax;
    for (let x = 0; x <= xMax; x++) {
      if (!this.map[x]) {
        this.map[x] = [];
      }
      for (let y = 0; y <= yMax; y++) {
        this.map[x][y] = 0;
        // console.log(`x - y ${x} - ${y}`);
      }
    }
  }

  // eslint-disable-next-line complexity
  expandSimpleRowIntoPoints = row => {
    const points = [];
    if (row.isVerticalRow()) {
      const yMax = Math.max(row.firstPoint.y, row.secondPoint.y);
      const yMin = Math.min(row.firstPoint.y, row.secondPoint.y);
      const x = row.firstPoint.x;

      for (let y = yMin; y <= yMax; y++) {
        points.push(new Coordinate([x, y]));
      }
    }
    if (row.isOrizontalRow()) {
      const xMax = Math.max(row.firstPoint.x, row.secondPoint.x);
      const xMin = Math.min(row.firstPoint.x, row.secondPoint.x);
      const y = row.firstPoint.y;
      for (let x = xMin; x <= xMax; x++) {
        points.push(new Coordinate([x, y]));
      }
    }

    if (!row.isOrizontalRow() && !row.isVerticalRow()) {
      if (row.firstPoint.x < row.secondPoint.x) {
        if (row.firstPoint.y < row.secondPoint.y) {
          let y = row.firstPoint.y;
          for (let x = row.firstPoint.x; x <= row.secondPoint.x; x++) {
            points.push(new Coordinate([x, y]));
            y++;
          }
        }

        if (row.firstPoint.y > row.secondPoint.y) {
          let y = row.firstPoint.y;
          for (let x = row.firstPoint.x; x <= row.secondPoint.x; x++) {
            points.push(new Coordinate([x, y]));
            y--;
          }
        }
      }
      if (row.firstPoint.x > row.secondPoint.x) {
        if (row.firstPoint.y < row.secondPoint.y) {
          let y = row.firstPoint.y;
          for (let x = row.firstPoint.x; x >= row.secondPoint.x; x--) {
            points.push(new Coordinate([x, y]));
            y++;
          }
        }
        if (row.firstPoint.y > row.secondPoint.y) {
          let y = row.firstPoint.y;
          for (let x = row.firstPoint.x; x >= row.secondPoint.x; x--) {
            points.push(new Coordinate([x, y]));
            y--;
          }
        }
      }
    }

    return points;
  };

  getOverlaps = () => {
    let result = 0;
    for (let x = 0; x <= this.xMax; x++) {
      for (let y = 0; y <= this.yMax; y++) {
        // console.log('this.map[x][y]', this.map[x][y]);
        if (this.map[x][y] > 1) {
          result++;
        }
      }
    }

    return result;
  };

  addRow = row => {
    // console.log('addRow ', row);
    const points = this.expandSimpleRowIntoPoints(row);

    for (const point of points) {
      const newVal = this.map[point.x][point.y] + 1;
      // console.log('newVal = ', newVal);
      this.map[point.x][point.y] = newVal;
    }
    // console.log('Added row ', row);
  };

  print = () => {
    const myInvertedMap = [];

    for (let x = 0; x <= this.xMax; x++) {
      for (let y = 0; y <= this.yMax; y++) {
        if (!myInvertedMap[y]) {
          myInvertedMap[y] = [];
        }
        myInvertedMap[y][x] = this.map[x][y];
      }
    }

    for (let y = 0; y <= this.yMax; y++) {
      console.log(JSON.stringify(myInvertedMap[y]));
    }
  };
}

export default CableMap;
