export class Threshlod {
  accelerationThreshold: number;
  rotationRateThreshold: number;
  speedThreshold: number;
  timeThreshlod: number;

  constructor(accelerationThreshold: number, rotationRateThreshold: number, speedThreshold: number, timeThreshlod: number) {
    this.accelerationThreshold = accelerationThreshold;
    this.rotationRateThreshold = rotationRateThreshold;
    this.speedThreshold = speedThreshold;
    this.timeThreshlod = timeThreshlod;
  }
}