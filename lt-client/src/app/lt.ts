import {LtLine} from "./lt-line";

export class Lt {
  name: string = 'Lower Thirds name'
  show: boolean = true;
  horizontal: string = '100px';
  vertical: string = '70px';
  bgColor: string = '#00ff00';
  duration: number = 5;
  lines: LtLine[] = [new LtLine(), new LtLine()];
  position: string = 'lt';
  zoom: number = 100;
  transformType: string = 'none';
  transformDegree: number = 0;



}
