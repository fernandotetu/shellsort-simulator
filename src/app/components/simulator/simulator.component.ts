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

  constructor() {
    this.simulator = new Simulator();
    this.simulator.data.push(2);
    this.simulator.data.push(12);
    this.simulator.data.push(72);
  }

  start() {
    //$("#d2").parent().append("<i class='material-icons'>home</i> ");
    $("#d2").toggleClass("mat-elevation-z4");
  }

  ngOnInit(): void {}
}
