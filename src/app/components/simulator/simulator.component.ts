import { Component, OnInit } from "@angular/core";
import { Simulator } from "src/app/shared/simulator";

import * as $ from "jquery";
import * as conn from "jquery-connections";
@Component({
  selector: "app-simulator",
  templateUrl: "./simulator.component.html",
  styleUrls: ["./simulator.component.scss"],
})
export class SimulatorComponent implements OnInit {
  simulator: Simulator;
  speed = 1;
  constructor() {
    this.simulator = new Simulator();
    this.simulator.data.push(10);
    this.simulator.data.push(4);
    this.simulator.data.push(5);
    this.simulator.data.push(3);
    this.simulator.data.push(9);
    this.simulator.data.push(2);
    this.simulator.data.push(1);
    this.simulator.data.push(12);
  }

  start() {
    //$("#d2").parent().append("<i class='material-icons'>home</i> ");
    //$("#d2").toggleClass("mat-elevation-z4");
    //$("#d10").toggleClass("selected");
    this.shellSort();
  }

  async shellSort() {
    const array = this.simulator.data;
    const gaps = this.simulator.hList;
    for (var g = 0; g < gaps.length; g++) {
      var gap = gaps[g];

      for (var i = gap; i < array.length; i++) {
        var temp = array[i];
        let prev = i - gap;
        var aux = array[prev];
        $(`#d${prev}`).toggleClass("selected");
        $(`#d${i}`).toggleClass("selected");
        console.log(aux, "-", temp);
        for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
          array[j] = array[j - gap];
        }
        array[j] = temp;
        await this.delay(this.speed * 1000);

        $(`#d${prev}`).toggleClass("selected");
        $(`#d${i}`).toggleClass("selected");
      }
    }
    return array;
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  ngOnInit(): void {}
}
