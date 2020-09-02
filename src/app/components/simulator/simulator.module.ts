import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "src/app/shared/material.module";
import { SimulatorSettingsComponent } from "./simulator-settings/simulator-settings.component";
import { SimulatorComponent } from "./simulator.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SimulatorComponent, SimulatorSettingsComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
})
export class SimulatorModule {}
