class MovingAverage {
  constructor(size) {
    this.size = size;
    this.container = [];
    this.runningSum = 0;
  }

  next(val) {
    if (this.container.length === this.size) {
      this.runningSum -= this.container.shift();
    }

    this.runningSum += val;
    this.container.push(val);

    const movingAverage =
      this.runningSum / Math.min(this.container.length, this.size);

    return movingAverage;
  }
}
