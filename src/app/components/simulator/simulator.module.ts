import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { MaterialModule } from "src/app/shared/material.module";
import { SimulatorSettingsComponent } from "./simulator-settings/simulator-settings.component";
import { SimulatorComponent } from "./simulator.component";
@NgModule({
  declarations: [SimulatorComponent, SimulatorSettingsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ChartsModule,
  ],
})
export class SimulatorModule {}
