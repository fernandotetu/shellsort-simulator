export enum H_Strategy {
  EVEN = "even",
  ODD = "odd",
}

export class Simulator {
  data: Array<number>;
  hList: Array<number>;
  constructor() {
    this.data = new Array<number>();
    this.hList = new Array<number>();
  }

  updateHlist(type: string = H_Strategy.ODD) {
    this.hList = new Array<number>();
    let h = 1;

    do {
      this.hList.push(h);
      if (type == H_Strategy.ODD) {
        h = 3 * h + 1;
      } else {
        h = h * 2;
      }
    } while (h < this.data.length);

    this.hList.reverse();
    //while h < n , h = 3*h + 1
  }
}
