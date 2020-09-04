import { Component, OnInit, Input } from "@angular/core";
import { SimulatorModule } from "../simulator.module";
import { Simulator, H_Strategy } from "src/app/shared/simulator";

@Component({
  selector: "app-simulator-settings",
  templateUrl: "./simulator-settings.component.html",
  styleUrls: ["./simulator-settings.component.scss"],
})
export class SimulatorSettingsComponent implements OnInit {
  @Input()
  simulator: Simulator;
  entryData: string;

  strategy: string = H_Strategy.ODD;
  constructor() {}

  add() {
    if (this.entryData) {
      this.simulator.data.push(parseInt(this.entryData));
      this.entryData = null;
      this.simulator.updateHlist(this.strategy);
    }
  }

  changeStrategy() {
    this.simulator.updateHlist(this.strategy);
  }

  generateNumbers() {
    for (let i = 0; i < 5; i++) {
      const generated = Math.floor(Math.random() * 100) + 1;
      this.simulator.data.push(generated);
    }
    this.simulator.updateHlist(this.strategy);
  }

  ngOnInit(): void {}
}
