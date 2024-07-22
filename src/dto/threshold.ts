export class Threshlod {
  accelerationThreshold: number;
  rotationRateThreshold: number;
  speedThreshold: number;
  timeThreshold: number;

  constructor(accelerationThreshold: number, rotationRateThreshold: number, speedThreshold: number, timeThreshold: number) {
    this.accelerationThreshold = accelerationThreshold;
    this.rotationRateThreshold = rotationRateThreshold;
    this.speedThreshold = speedThreshold;
    this.timeThreshold = timeThreshold;
  }
}