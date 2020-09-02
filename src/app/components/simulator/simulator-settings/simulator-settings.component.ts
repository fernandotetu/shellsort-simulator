import { Component, OnInit, Input } from "@angular/core";
import { SimulatorModule } from "../simulator.module";
import { Simulator } from "src/app/shared/simulator";

@Component({
  selector: "app-simulator-settings",
  templateUrl: "./simulator-settings.component.html",
  styleUrls: ["./simulator-settings.component.scss"],
})
export class SimulatorSettingsComponent implements OnInit {
  @Input()
  simulator: Simulator;
  entryData: string;
  constructor() {}

  add() {
    if (this.entryData) {
      this.simulator.data.push(new Number(this.entryData));
      this.entryData = null;
    }
  }

  generateNumbers() {
    for (let i = 0; i < 5; i++) {
      const generated = Math.floor(Math.random() * 100) + 1;
      this.simulator.data.push(generated);
    }
  }

  ngOnInit(): void {}
}
