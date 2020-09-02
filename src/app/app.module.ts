import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { MaterialModule } from "./shared/material.module";
import { SimulatorComponent } from "./components/simulator/simulator.component";
import { SimulatorModule } from "./components/simulator/simulator.module";
import { SimulatorSettingsComponent } from "./components/simulator/simulator-settings/simulator-settings.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SimulatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
